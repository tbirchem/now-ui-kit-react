
import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import LandingPage from "./views/index-sections/AboutPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BrowserRouter>
    <Switch>
        <Switch>
            <Route path="/index" render={(props) => <Index {...props} />}/>
            <Route path="/landing-page" render={(props) => <LandingPage {...props} />} />
            <Redirect to="/index"/>
            <Redirect from="/" to="/index"/>
        </Switch>
    </Switch>
</BrowserRouter>);
