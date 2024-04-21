
window.ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

window.ipcRenderer.on('yandex-login-success', (event, data) => {
  // TODO: дописать обработку получения токена и записи его в общий 
  // TODO: список подключенных аккаунтов
  const token = JSON.stringify(data).split('://access_token=')[1].slice(0, -1);
  localStorage.setItem('yandex_access_token', token);
})