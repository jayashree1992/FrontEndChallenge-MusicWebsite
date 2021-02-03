import React from "react";
import "./_card.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="card-container">
        {props.isFlip ? (
          <div className="card-flip">
            <div className="card front">
              <img
                src={props.imgSource}
                className="card-img-top img-fluid custom"
                alt=""
              ></img>
            </div>
            <div className="card back text-center">
              <div className="card-block">
                <img
                  src={props.imgSource}
                  className="card-img-top img-fluid"
                  alt=""
                ></img>
                <div className="card-overlay"></div>
                <div className="cust-btn-wrapper">
                  <a
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                    class="btn c-btn mb-2 mt-5"
                  >
                    <VisibilityIcon className="card-flip-icon ico-sm" />
                    {` View Details`}
                  </a>
                  <br />
                  <a onClick={props.handleModalOpen} class="btn c-btn">
                    <PlaylistAddIcon className="card-flip-icon ico-md" />
                    {` Add To PlayList`}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="card front cust-album mb-2">
            <img
              src={props.imgSource}
              className="card-img-top img-fluid custom"
              alt=""
            ></img> 
          </div>
        )}
      </div>

      <div className="card-body pl-3 pt-0">
        <div className="d-flex flex-row justify-content-around ">
          <div className="ico-wrapper">
            <FavoriteBorderIcon className="heart-ico" /> <br/>
            {props.isFlip ? null : <VisibilityIcon className="view-ico" />}<br/>
            {props.isFlip ? null : <button className="add-btn" onClick={props.handleModalOpen} ><PlaylistAddIcon className="add-ico" /></button>}
          
          </div>
          <div className="album-artist-name-wrapper">
            <div className="album-name">{props.title}</div>
            <div className="artist-name"> {props.artist}</div>
    
          </div>
          <div className="play-ico pl-2">
            <a href={props.link} target="_blank">
              <PlayCircleFilledIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
  


    </React.Fragment>
  );
};

export default Card;

