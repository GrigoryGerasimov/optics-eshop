import React from "react";
import { Navigate } from "react-router-dom";
import { Main, Login, Register, AuthContainer } from "./components/layout";
import { ProductCardsList, ProductCards } from "./components/ui";
import { PageNotFound } from "./components/common/PageNotFound.jsx";

const isSignedIn = true;

export const routes = () => {
    return [
        {
            path: "",
            element: <Main/>,
            children: [
                { path: "", element: <Navigate to="products"/> },
                { path: "*", element: <PageNotFound/> }
            ]
        },
        {
            path: "products",
            element: !isSignedIn ? <Navigate to="/login" state={{ from: location }}/> : <ProductCardsList/>,
            children: [
                { path: "", element: <ProductCards/> },
                // { path: "/:productId", element: <ProductCard/>, children: [
                // { path: "", element: <ProductCardPage/> },
                // { path: "edit", element: <ProductCardEditPage/> },
                // { path: "*", element: <Navigate to={!isLoggedIn ? "/login" : <PageNotFound/> }
                // ] },
                { path: "*", element: <Navigate to={!isSignedIn ? "/login" : <PageNotFound/>}/> }
            ]
        },
        {
            path: "auth",
            element: <AuthContainer/>,
            children: [
                { path: "", element: <Navigate to="login"/> },
                { path: "login", element: <Login/> },
                { path: "register", element: <Register/> },
                { path: "*", element: <PageNotFound/> }
            ]
        },
        { path: "*", element: <PageNotFound/> }
    ];
};
