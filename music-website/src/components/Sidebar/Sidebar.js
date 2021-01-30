import React from "react";
import logo from "../../assets/topBeatsLogo.png";
import "./_sidebar.scss";
import { navigationItems } from "../../constants";
import { NavLink, withRouter } from "react-router-dom";

const Sidebar = (props) => {
  return (
    <div className="side-nav">
      <a
        href="javascript:void(0);"
        className="close-nav"
        onClick={props.onCancelClick}
      >
        &#x2715;
      </a>
      <NavLink to="/" exact className="nav-link">
        <img src={logo} className="logo" />
      </NavLink>
      <ul>
        {navigationItems.map((item) => {
          return (
            <NavLink to={item.url} exact className="nav-link">

              <span className="nav-text">{item.name}</span>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default withRouter(Sidebar);
