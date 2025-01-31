import React, { useRef, useEffect } from "react";
import { mount as mountMarketing } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null);
  const browserHistory = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountMarketing(ref.current, {
      initialPath: browserHistory.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = browserHistory.location;
        if (currentPathname !== nextPathname) {
          browserHistory.push(nextPathname);
        }
      },
    });

    browserHistory.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
