import React from "react";
import "./_hamburger.scss";
import QueueMusicOutlinedIcon from '@material-ui/icons/QueueMusicOutlined';


const Hamburger = (props) => {
  return (
    <button
      className="open-nav"
      onClick={props.onHamBurgerClick}
      style={props.style}>
      <QueueMusicOutlinedIcon/>
    </button>
  );
};

export default Hamburger;
