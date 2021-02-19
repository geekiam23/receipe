import React, { ReactElement } from "react";
import Recipes from "./Recipes";
import Navbar from "../components/Navbar";
import Recipe from "./Recipe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (): ReactElement => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/" exact>
          <Recipes />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
