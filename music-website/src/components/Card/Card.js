import React from "react";
import "./_card.scss";
import SlowMotionVideoIcon from "@material-ui/icons/SlowMotionVideo";

const Card = (props) => {
  return (
    <div>
      <div className="card p-2 custom">
        <img
          src={props.imgSource}
          alt=""
          className="card-img-top"
          style={{ maxWidth: "100%!important" }}
        />
      </div>
      <div className="card-body pl-3 pt-0">
        <div className="d-flex flex-row justify-content-between">
          <div className="album-name">{props.title}</div>
          <div className="play-icon pl-2 ">
            <SlowMotionVideoIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
