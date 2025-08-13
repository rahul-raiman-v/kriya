import React from "react";
import { useLocation } from "react-router";

React.lazy(()=> import('react'));

React.lazy(()=> import('react-router'));


const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;