import { backendApi } from "../backendApi.js";

const usersApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveUserById: build.query({
            query: userId => ({
                url: `users/${userId}`
            }),
            providesTags: ["Users"]
        })
    })
});

export const { useReceiveUserByIdQuery } = usersApi;
