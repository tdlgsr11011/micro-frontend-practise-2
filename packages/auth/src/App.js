import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ memoryHistory }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={memoryHistory}>
          <Switch>
            <Route path="/auth/user/signin" component={SignIn} />
            <Route path="/auth/user/signup" component={SignUp} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
