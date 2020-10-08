import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home"
import Selection from "../src/pages/Selection";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/selection" component={Selection}></Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
