import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../src/pages/Home"
import Selection from "../src/pages/Selection";
import Arena from "../src/pages/Arena";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/selection" component={Selection}></Route>
          <Route exact path="/arena" component={Arena}></Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
