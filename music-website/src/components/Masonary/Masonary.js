import React from "react";
import { NavLink } from "react-router-dom";
import { MDBRow } from "mdbreact";
import "./_masonary.scss";

const Masonary = (props) => {
  return (
    <div className="masonary-wrapper">
    <MDBRow className="masonry-with-columns-2">
      {props.categories.map((category) => {
        return <NavLink to="/" className="cat">{category}</NavLink>;
      })}
    </MDBRow>
    </div>
  );
};

export default Masonary;
