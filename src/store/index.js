import { configureStore } from "@reduxjs/toolkit";
import accountsReducer from './accountsSlice.js';

export default configureStore({
    reducer: {
        accounts: accountsReducer
    },
});