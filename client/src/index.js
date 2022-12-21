import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store.js";
import App from "./app/App.jsx";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { loggingService } from "./app/services/loggingService.js";

loggingService.init();

ReactDOM.createRoot(document.querySelector("#root")).render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>
);
