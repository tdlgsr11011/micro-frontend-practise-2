import React, { useRef, useEffect } from "react";
import { mount as mountMarketing } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

const MarketingApp = () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    mountMarketing(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname: currentPathname } = history.location;
        if (currentPathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });
  });

  return <div ref={ref} />;
};

export default MarketingApp;
