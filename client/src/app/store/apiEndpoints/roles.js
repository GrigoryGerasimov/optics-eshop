import { backendApi } from "../backendApi.js";

const rolesApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveRoles: build.query({
            query: () => ({
                url: "roles"
            }),
            providesTags: ["Colors"]
        }),
        receiveRoleById: build.query({
            query: roleId => ({
                url: `roles/${roleId}`
            }),
            providesTags: ["Colors"]
        })
    })
});

export const { useReceiveRolesQuery, useReceiveRoleByIdQuery } = rolesApi;
