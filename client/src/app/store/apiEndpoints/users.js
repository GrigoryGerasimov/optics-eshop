import { backendApi } from "../backendApi.js";

const usersApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveUsers: build.query({
            query: () => ({
                url: "users"
            }),
            providesTags: ["Users"]
        }),
        receiveUserById: build.query({
            query: userId => ({
                url: `users/${userId}`
            }),
            providesTags: ["Users"]
        })
    })
});

export const { useReceiveUsersQuery, useReceiveUserByIdQuery } = usersApi;
