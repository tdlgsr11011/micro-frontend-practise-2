import React from "react";
import MarketingApp from "./components/MarketingApp";
import Typography from "@material-ui/core/Typography";
import { Button, ButtonGroup } from "@material-ui/core";

const App = () => {
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/atharvjoshi2705/");
  };

  const openGitRepo = () => {
    window.open("https://github.com/tdlgsr11011/micro-frontend-practise-2");
  };
  return (
    <div>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        React Micro Frontend App
      </Typography>
      <Typography align="center">
        <ButtonGroup
          variant="contained"
          color="primary"
          aria-label="contained primary button group"
        >
          <Button variant="contained" color="primary" onClick={openLinkedin}>
            Linkedin Profile
          </Button>
          <Button variant="outlined" color="primary" onClick={openGitRepo}>
            Github repository
          </Button>
        </ButtonGroup>
      </Typography>
      <hr />
      <MarketingApp />
    </div>
  );
};

export default App;
