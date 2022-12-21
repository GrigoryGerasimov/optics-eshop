import { configureStore } from "@reduxjs/toolkit";
import { backendApi } from "./backendApi.js";
import { authReducer } from "./authSlice.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        [backendApi.reducerPath]: backendApi.reducer,
        auth: authReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendApi.middleware)
});

setupListeners(store.dispatch);
