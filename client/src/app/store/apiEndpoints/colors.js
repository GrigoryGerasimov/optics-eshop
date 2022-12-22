import { backendApi } from "../backendApi.js";

const colorsApi = backendApi.injectEndpoints({
    endpoints: build => ({
        receiveColors: build.query({
            query: () => ({
                url: "colors"
            }),
            providesTags: ["Colors"]
        }),
        receiveColorById: build.query({
            query: colorId => ({
                url: `colors/${colorId}`
            }),
            providesTags: ["Colors"]
        })
    })
});

export const { useReceiveColorsQuery, useReceiveColorByIdQuery } = colorsApi;
