import { backendApi } from "../backendApi.js";

const lensetypesApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveLenseTypes: build.query({
            query: () => ({
                url: "lensetypes"
            }),
            providesTags: ["LenseTypes"]
        })
    })
});

export const { useReceiveLenseTypesQuery } = lensetypesApi;
