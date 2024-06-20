import { app, BrowserWindow, shell, ipcMain, Menu } from 'electron'
import { release } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { update } from './update'

globalThis.__filename = fileURLToPath(import.meta.url)
globalThis.__dirname = dirname(__filename)

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.mjs    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = join(__dirname, '../')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
process.env.VITE_PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, '../public')
  : process.env.DIST

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

let win = null
// Here, you can also use other preload
const preload = join(__dirname, '../preload/index.mjs')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')

async function createWindow() {
  win = new BrowserWindow({
    title: 'Cloud Manager',
    icon: join(process.env.VITE_PUBLIC, 'favicon.ico'),
    minHeight: 720,
    minWidth: 1280,
    height: 720,
    width: 1280,
    titleBarStyle: 'hiddenInset',
    nodeIntegration: true,
    webPreferences: {
      preload,
      // devTools: url ? true: false,
      devTools: true
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // nodeIntegration: true,

      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      // contextIsolation: false,
    },
  })

  const template = [
    {
      label: 'Cloud manager',
      submenu: [
        {
          label: 'О приложении',
          click: () => {
            shell.openExternal('http://electronjs.org')
          }
        },
        {
          label: 'Пользовательское соглашение',
          click() { win.webContents.send("agreement"); }          
        },
        { type: 'separator' },
        {
          label: 'Закрыть приложение',
          role: 'quit'
      },
      ]
    },
    {
      label: 'Правка',
      submenu: [
        {
          label: 'Что-то',
          click () { win.webContents.send("something"); }
        },
        {
          label: 'Где-то',
          click () { win.webContents.send("somewhere"); }          
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu);

  if (url) { // electron-vite-vue#298
    win.loadURL(url)
    // Open devTool if the app is not packaged
    win.webContents.openDevTools()
  } else {
    win.loadFile(indexHtml)
    win.webContents.openDevTools()
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })

  // Apply electron-updater
  update(win)

  ipcMain.on('open-external-link', (event, url) => {
    shell.openExternal(url);
  });
}

app.whenReady().then(() => {
  app.setAsDefaultProtocolClient("cloud-manager")
}).then(createWindow);

app.on('ready', () => {

})

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

app.on('open-url', (event, data) => {
  event.preventDefault();
  // Handle the URL appropriately
  if (data.split('://')[1].startsWith('google')) {
    win.webContents.send('google-login-success', {
      data
    })
  } else {
    win.webContents.send('yandex-login-success', {
      data
    })
  }
});

// New window example arg: new windows url
ipcMain.handle('open-win', (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`)
  } else {
    childWindow.loadFile(indexHtml, { hash: arg })
  }
})