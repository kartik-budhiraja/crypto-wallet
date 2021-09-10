import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import "antd/dist/antd.css";

import { Provider } from "./reducer";

import Home from "./Pages/Home";
import Wallet from "./Pages/Wallet";

function App() {
  return (
    <Router>
      <Provider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
