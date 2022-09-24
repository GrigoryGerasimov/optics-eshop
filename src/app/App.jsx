import React from "react";
import { Switch, Route } from "react-router-dom";
import { routeConfig } from "./routeConfig.js";
import { Landing } from "./layout";

const App = () => {
    return (
        <Landing>
            <Switch>
                {routeConfig.map(route => <Route key={route.id} path={route.path} component={route.component}/>)}
            </Switch>
        </Landing>
    );
};

export default App;
