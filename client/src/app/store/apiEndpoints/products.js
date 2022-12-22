import { backendApi } from "../backendApi.js";

const productsApi = backendApi.injectEndpoints({
    endpoints: build => ({
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
        })
    })
});

export const {
    useReceiveProductsQuery,
    useReceiveProductByIdQuery,
    useCreateProductMutation,
    useUpdateProductMutation,
    useDeleteProductMutation
} = productsApi;
