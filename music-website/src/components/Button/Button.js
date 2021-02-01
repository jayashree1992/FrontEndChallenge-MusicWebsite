import React from "react";
import { NavLink } from "react-router-dom";
import "./_button.scss";

const Button = (props) => {
  return (
    <div className={props.customStyle}>
      <NavLink className="link" to={props.url}>
        {props.label}
      </NavLink>
    </div>
  );
};

export default Button;
