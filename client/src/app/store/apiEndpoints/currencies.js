import { backendApi } from "../backendApi.js";

const currenciesApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveCurrencies: build.query({
            query: () => ({
                url: "currencies"
            }),
            providesTags: ["Currencies"]
        }),
        receiveCurrencyById: build.query({
            query: currencyId => ({
                url: `currencies/${currencyId}`
            }),
            providesTags: ["Currencies"]
        })
    })
});

export const { useReceiveCurrenciesQuery, useReceiveCurrencyByIdQuery } = currenciesApi;
