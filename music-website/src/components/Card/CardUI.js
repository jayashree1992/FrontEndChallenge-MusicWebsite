import React from "react";
import "./_card.scss";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";

const CardUI = (props) => {
  return (
    <div>
      <div className="card p-1 custom">
        <img src={props.imgSource} alt="" className="card-img-top" />
      </div>

      <div className="card-body text-dark">
        <div class="d-flex flex-row justify-content-between mb-0 px-3">
          <div class="mt-1 album-name">Album mame to come here</div>
          <div className="play-icon">
            <PlayArrowRoundedIcon style={{ fontSize: "45px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUI;
