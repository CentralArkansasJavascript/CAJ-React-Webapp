import React from "react";
import { Route, HashRouter } from "react-router-dom";
import Home from "./containers/Home";
import Events from "./containers/Events";
import PastEvents from "./containers/PastEvents";
import AskUs from "./containers/AskUs";
import Resources from "./containers/Resources";


export default () =>
  <HashRouter>
    <div className="main">
    <Route path="/" exact component={Home} />
    <Route path="/Events" exact component={Events} />
    <Route path="/PastEvents" exact component={PastEvents} />
    <Route path="/AskUs" exact component={AskUs} />
    <Route path="/Resources" exact component={Resources} />
    </div>
  </HashRouter>;
