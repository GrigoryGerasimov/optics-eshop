import { backendApi } from "../backendApi.js";

const frametypesApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveFrameTypes: build.query({
            query: () => ({
                url: "frametypes"
            }),
            providesTags: ["FrameTypes"]
        })
    })
});

export const { useReceiveFrameTypesQuery } = frametypesApi;
