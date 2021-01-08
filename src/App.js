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
          <Home />
        </Route>
      </Switch>
      </div>
    </Router>
  );
};

export default App;
