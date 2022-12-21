import { httpService } from "./httpService.js";
import { getTokens } from "./tokenService.js";

const authEndpoint = "auth";

export const authService = {
    signIn: async ({ email, password }) => {
        const { data } = await httpService.post(`${authEndpoint}/signIn`, { email, password });
        return data;
    },
    signUp: async payload => {
        const { data } = await httpService.post(`${authEndpoint}/signUp`, payload);
        return data;
    },
    refresh: async () => {
        const { refreshTokenKey } = getTokens();
        const { data } = await httpService.post(`${authEndpoint}/token`, { refresh_token: refreshTokenKey });
        return data;
    }
};
