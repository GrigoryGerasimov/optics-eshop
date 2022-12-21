import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config.json";

export const backendApi = createApi({
    reducerPath: "backendApi",
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseApiEndpoint
    }),
    refetchOnFocus: true,
    tagTypes: ["Products", "ShipmentTypes", "Colors", "Countries", "Currencies", "LenseTypes", "FrameTypes", "GlassTypes", "Collections"],
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
            providesTags: ["ShipmentTypes"]
        }),
        receiveShipmentTypeById: build.query({
            query: shtId => ({
                url: `shipmenttypes/${shtId}`
            }),
            providesTags: ["ShipmentTypes"]
        }),
        receiveColors: build.query({
            query: () => ({
                url: "colors"
            }),
            providesTags: ["Colors"]
        }),
        receiveColorById: build.query({
            query: colorId => ({
                url: `colors/${colorId}`
            }),
            providesTags: ["Colors"]
        }),
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
        }),
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
        }),
        receiveLenseTypes: build.query({
            query: () => ({
                url: "lensetypes"
            }),
            providesTags: ["LenseTypes"]
        }),
        receiveFrameTypes: build.query({
            query: () => ({
                url: "frametypes"
            }),
            providesTags: ["FrameTypes"]
        }),
        receiveGlassTypes: build.query({
            query: () => ({
                url: "glasstypes"
            }),
            providesTags: ["GlassTypes"]
        }),
        receiveCollections: build.query({
            query: () => ({
                url: "collections"
            }),
            providesTags: ["Collections"]
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
    useReceiveCurrencyByIdQuery,
    useReceiveLenseTypesQuery,
    useReceiveFrameTypesQuery,
    useReceiveGlassTypesQuery,
    useReceiveCollectionsQuery
} = backendApi;
