import { Main, Login, Register } from "./components/layout";

export const routeConfig = [
    {
        id: 1,
        path: "/login",
        name: "Login",
        component: Login
    },
    {
        id: 2,
        path: "/register",
        name: "Register",
        component: Register
    },
    {
        id: 3,
        path: "/",
        name: "Main",
        component: Main
    }
];
