import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./_coloredblock.scss";

const ColoredBlock = (props) => {
  return (
    <Fragment>
      <div className="d-flex mr-2 custom-col">
        <NavLink to="/" className="col-4 m-1 inner sea-green">{props.categories[0]}</NavLink>

        <NavLink
          to="/"
          className="col-8 m-1 inner ochre-yellow"
        >{props.categories[1]}</NavLink>
      </div>

      <div className="d-flex mr-2 custom-col">
        <NavLink
          to="/"
          className="col-6 m-1 inner chrimson-red"
        >{props.categories[2]}</NavLink>
        <NavLink
          to="/"
          className="col-6 m-1 inner magenta"
        >{props.categories[3]}</NavLink>
      </div>

      <div className="d-flex mr-2 custom-col">
        <NavLink
          to="/"
          className="col-4 m-1 inner light-violet"
        >{props.categories[4]}</NavLink>
        <NavLink
          to="/"
          className="col-8 m-1 inner bright-pink"
        >{props.categories[5]}</NavLink>
      </div>
    </Fragment>
  );
};

export default ColoredBlock;
