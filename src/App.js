import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

import "antd/dist/antd.css";

import { Provider } from "./reducer";

import Home from "./Pages/Home";
import Wallet from "./Pages/Wallet";

function App() {
  return (
    <Router basename="/crypto-wallet">
      <Provider>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
