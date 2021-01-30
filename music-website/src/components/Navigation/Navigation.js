import React, { useState, useEffect, Fragment } from "react";
import { useMediaQuery } from "react-responsive";
import Hamburger from "../Hamburger/Hamburger";
import Sidebar from "../Sidebar/Sidebar";

const Navigation = () => {
  const isSmallScreen = useMediaQuery({ query: `(max-width: 760px)` });
  const [navWidth, setNavWidth] = useState(isSmallScreen ? 0 : "100%");
  const [showSideBar, setShowSideBar] = useState(isSmallScreen ? false : true);
  const [showHamBurger, setShowHamBurger] = useState(
    isSmallScreen ? true : false
  );

  /*
  This will automatically detect change in screen size
  and render navigation bar width acoordingly without reloading
  */
  useEffect(() => {
    function handleResize() {
      setNavWidth(isSmallScreen ? 0 : "100%");
      setShowSideBar(isSmallScreen ? false : true);
      setShowHamBurger(isSmallScreen ? true : false);
    }

    window.addEventListener("resize", handleResize);

    // clean up event listener to prevent memory leaks
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  const onHamBurgerClick = () => {
    setShowSideBar(true);
    setShowHamBurger(false);
  };

  const onCancelClick = () => {
    setShowSideBar(false);
    setShowHamBurger(true);
  };

  const style={
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: "2000"
}

  return (
    <Fragment>
      {isSmallScreen && showHamBurger && (
        <Hamburger
          onHamBurgerClick={onHamBurgerClick}
          style={style}
        />
      )}
      {showSideBar && <Sidebar onCancelClick={onCancelClick} />}
    </Fragment>
  );
};

export default Navigation;
