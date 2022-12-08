import React from "react";
import { useRoutes } from "react-router-dom";
import { Landing } from "./components/layout";
import { ProductsProvider, CategoriesProvider } from "./components/hooks";
import { routes } from "./routes/routes.jsx";

const App = () => {
    return (
        <CategoriesProvider>
            <ProductsProvider>
                <Landing>
                    {useRoutes(routes())}
                </Landing>
            </ProductsProvider>
        </CategoriesProvider>
    );
};

export default App;
