import React from "react";
import { BrowserRouter as Router,Switch, Route, } from "react-router-dom";
import App from "../App";
import {RegisterHeader} from "../RegisterHeader/Register";

const route = (
    <Router>
        <Switch>
            <Route exact path={"/"} render={(props)=><App {...props}/>}/>
            <Route exact path={"/register"} render={(props)=><RegisterHeader {...props}/>}/>

        </Switch>

    </Router>
)

export default route;