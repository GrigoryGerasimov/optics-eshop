import axios from "axios";
import { getTokens, setTokens } from "./tokenService.js";
import { authService } from "./authService.js";
import { loggingService } from "./loggingService.js";
import { toast } from "react-toastify";
import configFile from "../config.json";

const { refresh } = authService;

const http = axios.create({
    baseURL: configFile.baseApiEndpoint
});

http.interceptors.request.use(
    async config => {
        const { accessTokenKey, refreshTokenKey, expireDateKey } = getTokens();
        if (refreshTokenKey && expireDateKey < Date.now()) {
            const data = await refresh();
            setTokens(data);
        }
        if (accessTokenKey) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${accessTokenKey}`
            };
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

http.interceptors.response.use(
    res => res,
    error => {
        const { message, status } = error.response;
        if (error.response && status >= 400 && status < 500) toast.error(message);
        else if (status >= 500) loggingService.log(error);
        return Promise.reject(error);
    }
);

export const httpService = {
    post: http.post
};
