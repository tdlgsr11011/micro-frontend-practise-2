import React, { useRef, useEffect } from "react";
import { mount as mountAuth } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const browserHistory = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountAuth(ref.current, {
      initialPath: browserHistory.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = browserHistory.location;
        if (currentPathname !== nextPathname) {
          browserHistory.push(nextPathname);
        }
      },
      onSignIn,
    });

    browserHistory.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default AuthApp;
