import axios from "axios";
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
    }
};
