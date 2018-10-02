import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Events from "./containers/Events";

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Events" exact component={Events} />
  </Switch>;
