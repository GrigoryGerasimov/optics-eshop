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
        })
    })
});

export const {
    useReceiveProductsQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = backendApi;
