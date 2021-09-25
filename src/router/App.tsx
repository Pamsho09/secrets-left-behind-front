import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Game from "../container/Game";
import Home from "../container/Home";
import Layout from "../container/Layout";
import AppContext from "../ctx/AppContext";
import {useInitialState} from "../hooks/useInitialState";

export default function App() {
  const initialState = useInitialState();
  return (
    <Router>
      <AppContext.Provider value={initialState}>
        <Layout>
          <Switch>
            <Route path="/game" component={Game}></Route>
            <Route path="/" component={Home}></Route>
          </Switch>
        </Layout>
      </AppContext.Provider>
    </Router>
  );
}
