import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config.json";

export const backendApi = createApi({
    reducerPath: "backendApi",
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseApiEndpoint
    }),
    refetchOnFocus: true,
    endpoints: (build) => ({
        receiveProducts: build.query({
            query: () => ({
                url: "products"
            })
        })
    })
});

export const {
    useReceiveProductsQuery
} = backendApi;
