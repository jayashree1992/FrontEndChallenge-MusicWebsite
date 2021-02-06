import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./_coloredblock.scss";

const ColoredBlock = (props) => {
  return (
    <Fragment>
      <div className="d-flex mr-2 custom-col">
        <NavLink to="/" className="col-4 m-1 inner color-hue1">{props.categories[0]}</NavLink>

        <NavLink
          to="/"
          className="col-8 m-1 inner color-hue2"
        >{props.categories[1]}</NavLink>
      </div>

      <div className="d-flex mr-2 custom-col">
        <NavLink
          to="/"
          className="col-6 m-1 inner color-hue3"
        >{props.categories[2]}</NavLink>
        <NavLink
          to="/"
          className="col-6 m-1 inner color-hue4"
        >{props.categories[3]}</NavLink>
      </div>

      <div className="d-flex mr-2 custom-col">
        <NavLink
          to="/"
          className="col-4 m-1 inner color-hue5"
        >{props.categories[4]}</NavLink>
        <NavLink
          to="/"
          className="col-8 m-1 inner color-hue6"
        >{props.categories[5]}</NavLink>
      </div>
    </Fragment>
  );
};

export default ColoredBlock;
