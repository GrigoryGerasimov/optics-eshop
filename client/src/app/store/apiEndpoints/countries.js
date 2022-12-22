import { backendApi } from "../backendApi.js";

const countriesApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveCountries: build.query({
            query: () => ({
                url: "countries"
            }),
            providesTags: ["Countries"]
        }),
        receiveCountryById: build.query({
            query: countryId => ({
                url: `countries/${countryId}`
            }),
            providesTags: ["Countries"]
        })
    })
});

export const { useReceiveCountriesQuery, useReceiveCountryByIdQuery } = countriesApi;
