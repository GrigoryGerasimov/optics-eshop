import axios from "axios";
import { getTokens } from "./tokenService.js";
import configFile from "../config.json";

const authEndpoint = "auth";

const httpAuth = axios.create({
    baseURL: configFile.baseApiEndpoint + authEndpoint
});

export const authService = {
    signIn: async ({ email, password }) => {
        const { data } = await httpAuth.post("login", { email, password });
        return data;
    },
    signUp: async payload => {
        const { data } = await httpAuth.post("register", payload);
        return data;
    },
    refresh: async () => {
        const { refreshTokenKey } = getTokens();
        const { data } = await httpAuth.post("token", { refresh_token: refreshTokenKey });
        return data;
    }
};
