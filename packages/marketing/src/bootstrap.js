import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createMemoryHistory } from "history";

const mount = (el, { onNavigate }) => {
  const memoryHistory = createMemoryHistory();
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
  const devRoot = document.querySelector("#_marketing-dev-root");
  if (devRoot) {
    mount(devRoot, {});
  }
}

export { mount };
