import React from "react";
import { useRoutes } from "react-router-dom";
import { Landing } from "./components/layout";
import { routes } from "./routes.jsx";

const App = () => {
    return (
        <Landing>
            {useRoutes(routes())}
        </Landing>
    );
};

export default App;
