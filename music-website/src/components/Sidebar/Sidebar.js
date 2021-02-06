import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import logo from '../../assets/topBeatsLogo.png';
import './_sidebar.scss';
import { navigationItems } from '../../constants';

const Sidebar = props => (
  <div className="side-nav">
    <button
      className="close-nav"
      onClick={props.onCancelClick}
    >
      <CloseIcon />
    </button>
    <NavLink to="/" exact className="nav-link">
      <img src={logo} className="logo" alt="logo" />
    </NavLink>
    <ul>
      {navigationItems.map(item => (
        <NavLink to={item.url} exact className="nav-link" key={item.name}>
          {item.icon}
          <span className="nav-text">{item.name}</span>
        </NavLink>
      ))}
    </ul>
  </div>
);

export default withRouter(Sidebar);
