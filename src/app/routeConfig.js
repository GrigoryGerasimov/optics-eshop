import { Main, Login } from "../layout";

export const routeConfig = [
    {
        id: 1,
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        id: 2,
        path: "/",
        name: "Main",
        component: Main
    }
];
