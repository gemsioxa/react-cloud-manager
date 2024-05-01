window.ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

window.ipcRenderer.on('yandex-login-success', (event, data) => {
  // TODO: дописать обработку получения токена и записи его в общий 
  // TODO: список подключенных аккаунтов
  const token = JSON.stringify(data).split('://access_token=%22')[1].slice(0, -5);
  console.log(data);
  console.log('token', token);
  const accounts = localStorage.getItem('accounts');
  if (accounts) {
    const newAccount: AccountsType = {
      ...JSON.parse(accounts),
      yandex: [...[{token: token, avatar: '', email: '', name: 'Name'}]]
    }

    localStorage.setItem('accounts', JSON.stringify(newAccount));

  } else {
    const newAccount: AccountsType = {
      yandex: [
        {
          token: token,
          avatar: '',
          email: '',
          name: 'Name',
        }
      ]
    }
    localStorage.setItem('accounts', JSON.stringify(newAccount));

  }
})

type AccountsType = {
  yandex: Array<YandexAccount>;
}

type YandexAccount = {
  token: string;
  avatar?: string;
  email?: string;
  name?: string;
}