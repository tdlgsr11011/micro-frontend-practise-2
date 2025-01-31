import React, { useRef, useEffect } from "react";
import { mount as mountFood } from "food/FoodApp";
import { useHistory } from "react-router-dom";

const FoodApp = () => {
  const ref = useRef(null);
  const browserHistory = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mountFood(ref.current, {
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

export default FoodApp;
