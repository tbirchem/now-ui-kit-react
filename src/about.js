import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Switch} from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss?v=1.5.0";
import "assets/demo/demo.css?v=1.5.0";
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0";
// pages for this kit
import Index from "views/Index.js";
import About from "views/About.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BrowserRouter>
    <Switch>
        <Route path="/about" component={About}/>
        <Route path="" component={Index} />}
    </Switch>
</BrowserRouter>);