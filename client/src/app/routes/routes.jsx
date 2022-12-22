import React from "react";
import { Navigate } from "react-router-dom";
import { Main, Login, Register, AuthContainer, Logout } from "../layouts";
import { ProductCardsList, ProductCard, Collection, GlassType, FrameType, LenseType, ShoppingCart, AdminControl } from "../components/pages/page_outlets";
import { ProductCardsPage, ProductPage, CollectionPage, GlassTypePage, FrameTypePage, LenseTypePage, ShoppingCartPage, AdminPage } from "../components/pages";
import { PageNotFound } from "../components/common/PageNotFound.jsx";
import paths from "./paths.js";

const {
    BASE,
    REST,
    PRODUCTS,
    PRODUCT: { COLLECTION, GLASS_TYPE, FRAME_TYPE, LENSE_TYPE, ID },
    AUTH,
    LOGIN,
    REGISTER,
    LOGOUT,
    AUTH_LOGIN,
    CART,
    ADMIN
} = paths;

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
            element: !isSignedIn ? <Navigate to={AUTH_LOGIN} state={{ from: location }}/> : <ProductCardsList/>,
            children: [
                { path: BASE, element: <ProductCardsPage/> },
                {
                    path: COLLECTION,
                    element: <Collection/>,
                    children: [
                        { path: BASE, element: <CollectionPage/> },
                        {
                            path: GLASS_TYPE,
                            element: <GlassType/>,
                            children: [
                                { path: BASE, element: <GlassTypePage/> },
                                {
                                    path: FRAME_TYPE,
                                    element: <FrameType/>,
                                    children: [
                                        { path: BASE, element: <FrameTypePage/> },
                                        {
                                            path: LENSE_TYPE,
                                            element: <LenseType/>,
                                            children: [
                                                { path: BASE, element: <LenseTypePage/> },
                                                {
                                                    path: ID,
                                                    element: <ProductCard/>,
                                                    children: [
                                                        { path: BASE, element: <ProductPage/> },
                                                        { path: REST, element: <Navigate to={!isSignedIn ? AUTH_LOGIN : <PageNotFound/>}/> }
                                                    ]
                                                },
                                                { path: REST, element: <Navigate to={!isSignedIn ? AUTH_LOGIN : <PageNotFound/>}/> }
                                            ]
                                        },
                                        { path: REST, element: <Navigate to={!isSignedIn ? AUTH_LOGIN : <PageNotFound/>}/> }
                                    ]
                                },
                                { path: REST, element: <Navigate to={!isSignedIn ? AUTH_LOGIN : <PageNotFound/>}/> }
                            ]
                        },
                        { path: REST, element: <Navigate to={!isSignedIn ? AUTH_LOGIN : <PageNotFound/>}/> }
                    ]
                },
                { path: REST, element: <Navigate to={!isSignedIn ? AUTH_LOGIN : <PageNotFound/>}/> }
            ]
        },
        {
            path: CART,
            element: <ShoppingCart/>,
            children: [
                { path: BASE, element: <ShoppingCartPage/> },
                { path: REST, element: <PageNotFound/> }
            ]
        },
        {
            path: ADMIN,
            element: <AdminControl/>,
            children: [
                { path: BASE, element: <AdminPage/> },
                { path: REST, element: <PageNotFound/> }
            ]
        },
        {
            path: AUTH,
            element: <AuthContainer/>,
            children: [
                { path: BASE, element: <Navigate to={LOGIN}/> },
                { path: LOGIN, element: <Login/> },
                { path: REGISTER, element: <Register/> },
                { path: LOGOUT, element: <Logout/> },
                { path: REST, element: <PageNotFound/> }
            ]
        },
        { path: REST, element: <PageNotFound/> }
    ];
};
