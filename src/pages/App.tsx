import { ReactElement, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { auth, createUserProfileDocument } from "../config/firebase";
import { UserContext } from "../lib/context";

import { setCurrentUser } from "../redux/user/user.actions";

import RandomRecipes from "./RandomRecipes";
import Recipe from "./Recipe";
import Recipes from "./Recipes";
import SignInAndSignUp from "./SignInAndSignUp";

import Navbar from "../components/Navbar";
import Landing from "./Landing";

const App = ({ setCurrentUser, currentUser }): ReactElement => {
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <Router forceRefresh>
      <UserContext.Provider value={currentUser}>
        <Navbar />
        <Switch>
          <Route path="/recipe/:id" component={Recipe} />
          <Route
            exact
            path="/signin"
            render={() =>
              currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
          <Route path="/random" component={RandomRecipes} />
          <Route path="/fav-recipes" component={Recipes} />
          <Route path="/" exact>
            <Landing />
          </Route>
        </Switch>
      </UserContext.Provider>
    </Router>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
