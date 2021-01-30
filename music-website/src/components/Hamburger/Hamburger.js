import React from "react";
import "./_hamburger.scss";

const Hamburger = (props) => {
  return (
    <button
      className="open-nav"
      onClick={props.onHamBurgerClick}
      style={props.styles}>
      ☰
    </button>
  );
};

export default Hamburger;
