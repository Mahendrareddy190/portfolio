import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
const App = () => {
  return (
    <Router>
      <div className="app">
      <Switch>
        <Route path="/">
          <Header/>
          <Home />
        </Route>
        <Route path="/home">
          <Header/>
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
};

export default App;
