import { backendApi } from "../backendApi.js";

const collectionsApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveCollections: build.query({
            query: () => ({
                url: "collections"
            }),
            providesTags: ["Collections"]
        })
    })
});

export const { useReceiveCollectionsQuery } = collectionsApi;
