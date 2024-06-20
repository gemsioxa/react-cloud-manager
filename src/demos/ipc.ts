import api from "@/api";
// @ts-ignore
import store from '@/store';
// @ts-ignore
import { update } from '@/store/accountsSlice';

window.ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

window.ipcRenderer.on('yandex-login-success', (event, data) => {
  const token = JSON.stringify(data).split('://access_token=%22')[1].slice(0, -5);
  const accounts = localStorage.getItem('accounts');
  api.yandex.getUserDiskMeta(token)
    .then((response) => {
      if (accounts) {
        const parsedAccounts = JSON.parse(accounts);
        if (parsedAccounts.yandex) {
          const newAccount: AccountsType = {
            ...JSON.parse(accounts),
            yandex: [...parsedAccounts.yandex, ...[{token: token, avatar: '', email: response.data.user.login, name: response.data.user.display_name}]]
          }
          localStorage.setItem('accounts', JSON.stringify(newAccount));
        } else {
          const newAccount: AccountsType = {
            ...JSON.parse(accounts),
            yandex: [...[{token: token, avatar: '', email: response.data.user.login, name: response.data.user.display_name}]]
          }
          localStorage.setItem('accounts', JSON.stringify(newAccount));
        }
      } else {
        const newAccount: AccountsType = {
          yandex: [
            {
              token: token,
              avatar: '',
              email: response.data.user.login,
              name: response.data.user.display_name,
            }
          ]
        }
        localStorage.setItem('accounts', JSON.stringify(newAccount));
    
      }
    })
    .then(() => {
      store.dispatch(update())
    })

})

window.ipcRenderer.on('google-login-success', (event, data) => {
  const token = JSON.stringify(data).split('://google_token=%22')[1].slice(0, -5);
  const accounts = localStorage.getItem('accounts');
  api.google.getUserInfo(token)
    .then((response) => {
      if (accounts) {
        const parsedAccounts = JSON.parse(accounts);
        if (parsedAccounts.google) {
          const newAccount: AccountsType = {
            ...JSON.parse(accounts),
            google: [...parsedAccounts.google, ...[{token: token, avatar: response.data.user.picture.url, email: response.data.user.emailAddress, name: response.data.user.displayName}]]
          }
          localStorage.setItem('accounts', JSON.stringify(newAccount));
        } else {
          const newAccount: AccountsType = {
            ...JSON.parse(accounts),
            google: [...[{token: token, avatar: response.data.user.picture.url, email: response.data.user.emailAddress, name: response.data.user.displayName}]]
          }
          localStorage.setItem('accounts', JSON.stringify(newAccount));
        }    
      } else {
        const newAccount: AccountsType = {
          google: [
            {
              token: token,
              avatar: response.data.user.picture.url ? response.data.user.picture.url : '',
              email: response.data.user.emailAddress,
              name: response.data.user.displayName,
            }
          ]
        }
        localStorage.setItem('accounts', JSON.stringify(newAccount));
    
      }
    })
    .then(() => {
      store.dispatch(update())
    })

})

type AccountsType = {
  yandex?: Array<YandexAccount>;
  google?: Array<GoogleAccount>;
}

type YandexAccount = {
  token: string;
  avatar?: string;
  email?: string;
  name?: string;
}

type GoogleAccount = {
  token: string;
  avatar?: string;
  email?: string;
  name?: string;
}