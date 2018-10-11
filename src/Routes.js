import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Events from "./containers/Events";
import PastEvents from "./containers/PastEvents";


export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Events" exact component={Events} />
    <Route path="/PastEvents" exact component={PastEvents} />

  </Switch>;
