import React, { lazy, Suspense, useState } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/Header";

const MarketingLazy = lazy(() => import("./components/remoteApps/MarketingApp"));
const AuthLazy = lazy(() => import("./components/remoteApps/AuthApp"));

import Progress from "./components/Progress";
import HomePage from "./components/home/HomePage";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const onSignIn = () => setIsSignedIn(true);
  const onSignOut = () => setIsSignedIn(false);

  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div className="appContainer">
          <Header isSignedIn={isSignedIn} onSignOut={onSignOut} />
          <div className="mainContainer">
            <Suspense fallback={<Progress />}>
              <Switch>
                <Route exact path={"/"}>
                  <Redirect to={"/home"} />
                </Route>
                <Route path="/auth">
                  <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/food-app" component={MarketingLazy} />
                <Route path="/home" component={HomePage} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
