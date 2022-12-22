import { backendApi } from "../backendApi.js";

const glasstypesApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveGlassTypes: build.query({
            query: () => ({
                url: "glasstypes"
            }),
            providesTags: ["GlassTypes"]
        })
    })
});

export const { useReceiveGlassTypesQuery } = glasstypesApi;
