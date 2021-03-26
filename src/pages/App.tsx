import { ReactElement, useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import RandomRecipes from "./RandomRecipes";
import Recipe from "./Recipe";
import Recipes from "./Recipes";
import { auth, createUserProfileDocument } from "../config/firebase";
import Navbar from "../components/Navbar";
import SignInAndSignUp from "./SignInAndSignUp";
import { UserContext } from "../lib/context";

const App = (): ReactElement => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <Router forceRefresh>
      <UserContext.Provider value={user}>
        <Navbar />
        <Switch>
          <Route path="/recipe/:id" component={Recipe} />
          <Route
            exact
            path="/signin"
            render={() => (user ? <Redirect to="/" /> : <SignInAndSignUp />)}
          />
          <Route path="/random" component={RandomRecipes} />
          <Route path="/" exact>
            <Recipes />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
