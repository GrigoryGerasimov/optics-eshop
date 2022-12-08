import React from "react";
import { useRoutes } from "react-router-dom";
import { Landing } from "./components/layout";
import { ProductsProvider } from "./components/hooks/useProducts.jsx";
import { routes } from "./routes/routes.jsx";

const App = () => {
    return (
        <ProductsProvider>
            <Landing>
                {useRoutes(routes())}
            </Landing>
        </ProductsProvider>
    );
};

export default App;
