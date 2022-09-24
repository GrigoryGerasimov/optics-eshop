import React from "react";
import { Switch, Route } from "react-router-dom";
import { routeConfig } from "./routeConfig.js";
import { Landing } from "./layout";
import { Navbar, Footer } from "./ui";

const App = () => {
    return (
        <Landing>
            <Navbar/>
            <Switch>
                {routeConfig.map(route => <Route key={route.id} path={route.path} component={route.component}/>)}
            </Switch>
            <Footer/>
        </Landing>
    );
};

export default App;
