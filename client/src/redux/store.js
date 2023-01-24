import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import {apiSlice} from "./apiSlice";
import usersReducer from './users/usersSlice'
export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        users: usersReducer,
        auth: authReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    //devTools: true
})