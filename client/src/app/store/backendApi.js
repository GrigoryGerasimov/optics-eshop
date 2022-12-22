import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config.json";

export const backendApi = createApi({
    reducerPath: "backendApi",
    baseQuery: fetchBaseQuery({
        baseUrl: config.baseApiEndpoint
    }),
    refetchOnFocus: true,
    tagTypes: ["Products", "ShipmentTypes", "Colors", "Countries", "Currencies", "LenseTypes", "FrameTypes", "GlassTypes", "Collections"],
    endpoints: () => ({})
});
