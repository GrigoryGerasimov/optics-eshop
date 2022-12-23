import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "../config.json";
import { getTokens, setTokens } from "../services/tokenService.js";

const baseQuery = fetchBaseQuery({
    baseUrl: config.baseApiEndpoint,
    prepareHeaders: headers => {
        if (getTokens().accessTokenKey) headers.set("Authorization", `Bearer ${getTokens().accessTokenKey}`);
    }
});

const baseAuthQuery = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
    if ((getTokens().refreshTokenKey && getTokens().expireDateKey < Date.now()) || (result.error && result.error.status === 401)) {
        const refresh = await baseQuery({ url: "auth/token", method: "POST", body: { refreshToken: getTokens().refreshTokenKey } }, api, extraOptions);
        const { data } = refresh.data;
        if (data) {
            setTokens(data);
            result = await baseQuery(args, api, extraOptions);
        }
    }
    return result;
};

export const backendApi = createApi({
    reducerPath: "backendApi",
    baseQuery: baseAuthQuery,
    tagTypes: ["Products", "ShipmentTypes", "Colors", "Countries", "Currencies", "LenseTypes", "FrameTypes", "GlassTypes", "Collections", "Roles", "Users"],
    endpoints: () => ({})
});
