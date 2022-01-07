import React, { useEffect, useState } from "react";
import { Routes, useLocation } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
TopBarProgress.config({
  barColors: {
    0: "#c49a6c",
    "1.0": "#c49a6c",
  },
  shadowBlur: 1,
});

const CustomSwitch = ({ children }) => {
  const [progress, setProgress] = useState(false);
  const [prevLoc, setPrevLoc] = useState({});
  const location = useLocation();

  useEffect(() => {
    setPrevLoc(location);
    setProgress(true);
    window.scrollTo(0, 0); //Go to top on every page load
  }, [location]);

  useEffect(() => {
    setProgress(false);
  }, [prevLoc]);
  return (
    <>
      {progress && <TopBarProgress />}
      <Routes>{children}</Routes>
    </>
  );
};

export default CustomSwitch;
