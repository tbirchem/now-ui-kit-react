/*

=========================================================
* Now UI Kit React - v1.5.1
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2022 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/main/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
            <Route path="/index" render={(props) => <Index {...props} />} />
            <Route path="/about" render={(props) => <About {...props} />} />
            <Route path="/" render={(props) => <Index {...props} />}/>
            <Route path="" render={(props) => <Index {...props} />}/>
    </Switch>
</BrowserRouter>);
