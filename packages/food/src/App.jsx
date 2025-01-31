import React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing/Landing.jsx";

const generateClassName = createGenerateClassName({
  productionPrefix: "fo",
});

const App = ({ memoryHistory }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={memoryHistory}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/food-app" />
            </Route>
            <Route exact path="/food-app" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
