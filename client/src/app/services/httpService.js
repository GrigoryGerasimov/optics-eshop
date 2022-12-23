import axios from "axios";
import { authService } from "./authService.js";
import { loggingService } from "./loggingService.js";
import { toast } from "react-toastify";
import configFile from "../config.json";

const http = axios.create({
    baseURL: configFile.baseApiEndpoint
});

http.interceptors.request.use(
    config => config,
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
