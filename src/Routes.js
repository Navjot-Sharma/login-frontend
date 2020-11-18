import React from "react";
import { Route } from "react-router";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Sample from "./pages/sample/Sample";

const routes = (
  <div>
    <Route path="/" exact component={Login} />
    <Route path="/profile" component={Home} />
    <Route path="/sample" component={Sample} />
  </div>
);

export default routes;
