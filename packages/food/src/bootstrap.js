import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const memoryHistory =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });
  if (onNavigate) {
    memoryHistory.listen(onNavigate);
  }

  ReactDOM.render(<App memoryHistory={memoryHistory} />, el);

  return {
    onParentNavigate: ({ pathname: nextPathname }) => {
      const currentPathname = memoryHistory.location.pathname;
      if (currentPathname !== nextPathname) {
        memoryHistory.push(nextPathname);
      }
    },
  };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_food-dev-rot");
  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

export { mount };
