import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./_coloredblock.scss";

const ColoredBlock = (props) => {
  return (
    <Fragment>
      <div className="d-flex mr-2 custom-col">
        <NavLink to="/" className="col-4 m-1 inner sea-green">{`Jazz`}</NavLink>

        <NavLink
          to="/"
          className="col-8 m-1 inner ochre-yellow"
        >{`Musicals`}</NavLink>
      </div>

      <div className="d-flex mr-2 custom-col">
        <NavLink
          to="/"
          className="col-6 m-1 inner chrimson-red"
        >{`Classical`}</NavLink>
        <NavLink
          to="/"
          className="col-6 m-1 inner magenta"
        >{`Electronic`}</NavLink>
      </div>

      <div className="d-flex mr-2 custom-col">
        <NavLink
          to="/"
          className="col-8 m-1 inner light-violet"
        >{`Country`}</NavLink>
        <NavLink
          to="/"
          className="col-4 m-1 inner bright-pink"
        >{`Rock`}</NavLink>
      </div>
    </Fragment>
  );
};

export default ColoredBlock;
