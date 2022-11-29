import React from "react";
import { Navigate } from "react-router-dom";
import { Main, Login, Register, AuthContainer } from "./components/layout";

export const routes = () => {
    return [
        { path: "", element: <Main/> },
        {
            path: "auth",
            element: <AuthContainer/>,
            children: [
                { path: "", element: <Navigate to="login"/> },
                { path: "login", element: <Login/> },
                { path: "register", element: <Register/> }
            ]
        }
    ];
};
