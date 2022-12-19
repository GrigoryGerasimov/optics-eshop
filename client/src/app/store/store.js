import { configureStore } from "@reduxjs/toolkit";
import { backendApi } from "./backendApi.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: { [backendApi.reducerPath]: backendApi.reducer },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(backendApi.middleware)
});

setupListeners(store.dispatch);
