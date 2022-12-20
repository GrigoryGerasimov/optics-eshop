import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config.json";

export const backendApi = createApi({
    reducerPath: "backendApi",
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseApiEndpoint
    }),
    refetchOnFocus: true,
    tagTypes: ["Products"],
    endpoints: (build) => ({
        receiveProducts: build.query({
            query: () => ({
                url: "products"
            }),
            providesTags: ["Products"]
        }),
        receiveProductById: build.query({
            query: id => ({
                url: `products/${id}`
            }),
            providesTags: ["Products"]
        }),
        createProduct: build.mutation({
            query: payload => ({
                url: "products",
                method: "POST",
                body: payload
            }),
            invalidatesTags: ["Products"]
        }),
        updateProduct: build.mutation({
            query: ({ id, payload }) => {
                return {
                    url: `products/${id}`,
                    method: "PUT",
                    body: payload
                };
            },
            invalidatesTags: ["Products"]
        }),
        deleteProduct: build.mutation({
            query: productId => ({
                url: `products/${productId}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Products"]
        }),
        receiveShipmentTypes: build.query({
            query: () => ({
                url: "shipmenttypes"
            }),
            providesTags: ["Products"]
        }),
        receiveShipmentTypeById: build.query({
            query: shtId => ({
                url: `shipmenttypes/${shtId}`
            }),
            providesTags: ["Products"]
        }),
        receiveColors: build.query({
            query: () => ({
                url: "colors"
            }),
            providesTags: ["Products"]
        }),
        receiveColorById: build.query({
            query: colorId => ({
                url: `colors/${colorId}`
            }),
            providesTags: ["Products"]
        }),
        receiveCountries: build.query({
            query: () => ({
                url: "countries"
            }),
            providesTags: ["Products"]
        }),
        receiveCountryById: build.query({
            query: countryId => ({
                url: `countries/${countryId}`
            }),
            providesTags: ["Products"]
        }),
        receiveCurrencies: build.query({
            query: () => ({
                url: "currencies"
            }),
            providesTags: ["Products"]
        }),
        receiveCurrencyById: build.query({
            query: currencyId => ({
                url: `currencies/${currencyId}`
            }),
            providesTags: ["Products"]
        })
    })
});

export const {
    useReceiveProductsQuery,
    useReceiveProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation,
    useReceiveShipmentTypesQuery,
    useReceiveShipmentTypeByIdQuery,
    useReceiveColorsQuery,
    useReceiveColorByIdQuery,
    useReceiveCountriesQuery,
    useReceiveCountryByIdQuery,
    useReceiveCurrenciesQuery,
    useReceiveCurrencyByIdQuery
} = backendApi;
