import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
);
