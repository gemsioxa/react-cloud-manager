import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    accounts: {
        yandex: [],
    },
};

const accountsSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        update: (state, action) => {
            const accountList = localStorage.getItem('accounts');
            if (accountList) {
                state.accounts = JSON.parse(accountList);
            }
        },
        deleteDiskItem: (state, action) => {
            if (state.accounts.yandex.length) {
                state.accounts.yandex = state.accounts.yandex.filter((account) => account.token !== action.payload);
                const accounts = JSON.parse(localStorage.getItem('accounts'));
                const newAccounts = {
                    ...accounts,
                    yandex: state.accounts.yandex || []
                };
                localStorage.setItem('accounts', JSON.stringify(newAccounts));
            }
        },
    }
})

export const { update, deleteDiskItem } = accountsSlice.actions;

export default accountsSlice.reducer;