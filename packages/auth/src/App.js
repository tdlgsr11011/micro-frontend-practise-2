import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

const App = ({ memoryHistory }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router history={memoryHistory}>
          <Switch></Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
