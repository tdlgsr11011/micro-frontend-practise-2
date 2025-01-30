import React, { lazy, Suspense, useState } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.scss";

import Header from "./components/header/Header";

const MarketingLazy = lazy(() => import("./components/MarketingApp"));
const AuthLazy = lazy(() => import("./components/AuthApp"));

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
                <Route path="/auth">
                  <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                </Route>
                <Route path="/" component={HomePage} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};

export default App;
