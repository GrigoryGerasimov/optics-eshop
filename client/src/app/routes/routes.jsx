import React from "react";
import { Navigate } from "react-router-dom";
import { Main, Login, Register, AuthContainer } from "../components/layout";
import { ProductCardsList, ProductCards, ProductCard } from "../components/ui";
import ProductPage from "../components/pages/ProductPage";
import { PageNotFound } from "../components/common/PageNotFound.jsx";
import paths from "./paths.js";

const { BASE, REST, PRODUCTS, PRODUCT_ID, AUTH, LOGIN, REGISTER, AUTH_LOGIN } = paths;
const isSignedIn = true;

export const routes = () => {
    return [
        {
            path: BASE,
            element: <Main/>,
            children: [
                { path: BASE, element: <Navigate to={PRODUCTS}/> },
                { path: REST, element: <PageNotFound/> }
            ]
        },
        {
            path: PRODUCTS,
            element: !isSignedIn ? <Navigate to={AUTH_LOGIN()} state={{ from: location }}/> : <ProductCardsList/>,
            children: [
                { path: BASE, element: <ProductCards/> },
                {
                    path: PRODUCT_ID,
                    element: <ProductCard/>,
                    children: [
                        { path: BASE, element: <ProductPage/> },
                        // { path: EDIT, element: <ProductCardEditPage/> },
                        { path: REST, element: <Navigate to={!isSignedIn ? AUTH_LOGIN() : <PageNotFound/>}/> }
                    ]
                },
                { path: REST, element: <Navigate to={!isSignedIn ? AUTH_LOGIN() : <PageNotFound/>}/> }
            ]
        },
        {
            path: AUTH,
            element: <AuthContainer/>,
            children: [
                { path: BASE, element: <Navigate to={LOGIN}/> },
                { path: LOGIN, element: <Login/> },
                { path: REGISTER, element: <Register/> },
                { path: REST, element: <PageNotFound/> }
            ]
        },
        { path: REST, element: <PageNotFound/> }
    ];
};
