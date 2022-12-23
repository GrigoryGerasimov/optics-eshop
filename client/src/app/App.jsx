import React from "react";
import { useRoutes } from "react-router-dom";
import { Landing } from "./layouts";
import { ProductsProvider, CategoriesProvider, CatalogsProvider } from "./hooks";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes/routes.jsx";
import { useSelector } from "react-redux";
import { authSelectors } from "./store/authSlice";

const App = () => {
    const isUserAuthorized = useSelector(authSelectors.getAuthorizedUserStatus());

    return (
        <>
            <CategoriesProvider>
                <ProductsProvider>
                    <CatalogsProvider>
                        <Landing>
                            {useRoutes(routes(isUserAuthorized))}
                        </Landing>
                    </CatalogsProvider>
                </ProductsProvider>
            </CategoriesProvider>
            <ToastContainer/>
        </>
    );
};

export default App;
