import React from "react";
import { useRoutes } from "react-router-dom";
import { Landing } from "./components/layout";
import { ProductsProvider, CategoriesProvider, CatalogsProvider } from "./components/hooks";
import { ToastContainer } from "react-toastify";
import { routes } from "./routes/routes.jsx";

const App = () => {
    return (
        <>
            <CategoriesProvider>
                <ProductsProvider>
                    <CatalogsProvider>
                        <Landing>
                            {useRoutes(routes())}
                        </Landing>
                    </CatalogsProvider>
                </ProductsProvider>
            </CategoriesProvider>
            <ToastContainer/>
        </>
    );
};

export default App;
