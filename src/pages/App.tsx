import { ReactElement } from "react";
import Recipes from "./Recipes";
import RandomRecipes from "./RandomRecipes";
import Navbar from "../components/Navbar";
import Recipe from "./Recipe";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (): ReactElement => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/random" component={RandomRecipes} />
        <Route path="/" exact>
          <Recipes />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
