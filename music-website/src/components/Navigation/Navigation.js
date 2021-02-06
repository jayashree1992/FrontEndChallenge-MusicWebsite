import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import Hamburger from '../Hamburger/Hamburger';
import Sidebar from '../Sidebar/Sidebar';

const Navigation = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 760px)' });
  const [showSideBar, setShowSideBar] = useState(!isSmallScreen);
  const [showHamBurger, setShowHamBurger] = useState(
    !!isSmallScreen
  );

  /*
  This will automatically detect change in screen size
  and render navigation bar width acoordingly without reloading
  */
  useEffect(() => {
    function handleResize() {
      setShowSideBar(!isSmallScreen);
      setShowHamBurger(!!isSmallScreen);
    }

    window.addEventListener('resize', handleResize);

    // clean up event listener to prevent memory leaks
    return () => {
      window.removeEventListener('resize', handleResize);
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

  const style = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: '2000',
    width: '40px',
  };

  return (
    <>
      {isSmallScreen && showHamBurger && (
        <Hamburger
          onHamBurgerClick={onHamBurgerClick}
          style={style}
        />
      )}
      {showSideBar && <Sidebar onCancelClick={onCancelClick} />}
    </>
  );
};

export default Navigation;
