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
  console.log(data);
  console.log('token', token);
  const accounts = localStorage.getItem('accounts');
  api.yandex.getUserDiskMeta(token)
    .then((response) => {
      if (accounts) {
        const newAccount: AccountsType = {
          ...JSON.parse(accounts),
          yandex: [...JSON.parse(accounts).yandex, ...[{token: token, avatar: '', email: response.data.user.login, name: response.data.user.display_name}]]
        }
    
        localStorage.setItem('accounts', JSON.stringify(newAccount));
    
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

type AccountsType = {
  yandex: Array<YandexAccount>;
}

type YandexAccount = {
  token: string;
  avatar?: string;
  email?: string;
  name?: string;
}