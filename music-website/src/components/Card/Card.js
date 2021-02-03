import React from "react";
import "./_card.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import _ from "lodash";

const Card = (props) => {
  const albumList = useSelector((state) => state.AlbumList.albums);
  const albumDetail = _.find(albumList, (o) => o.id === props.id);

  return (
    <React.Fragment>
      <div className="card-container">
        {props.isFlip ? (
          <div className="card-flip">
            <div className="card front">
              <img
                src={albumDetail.image_170}
                className="card-img-top img-fluid custom"
                alt=""
              ></img>
            </div>
            <div className="card back text-center">
              <div className="card-block">
                <img
                  src={albumDetail.image_170}
                  className="card-img-top img-fluid"
                  alt=""
                ></img>
                <div className="card-overlay"></div>
                <div className="cust-btn-wrapper">
                  <NavLink
                    to={{
                      pathname: `album/${albumDetail.id}`,
                      albumDetail: albumDetail,
                    }}
                    class="btn c-btn mb-2 mt-5"
                  >
                    <VisibilityIcon className="card-flip-icon ico-sm" />
                    {` View Details`}
                  </NavLink>
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
              src={albumDetail.image_170}
              className="card-img-top img-fluid custom"
              alt=""
            ></img>
          </div>
        )}
      </div>

      <div className="card-body pl-3 pt-0">
        <div className="d-flex flex-row justify-content-around ">
          <div className="ico-wrapper">
            <FavoriteBorderIcon className="heart-ico" /> <br />
            {props.isFlip ? null : (
              <NavLink
                to={{
                  pathname: `album/${albumDetail.id}`,
                  albumDetail: albumDetail,
                }}
              >
                <VisibilityIcon className="view-ico" />
              </NavLink>
            )}
            <br />
            {props.isFlip ? null : (
              <button className="add-btn" onClick={props.handleModalOpen}>
                <PlaylistAddIcon className="add-ico" />
              </button>
            )}
          </div>
          <div className="album-artist-name-wrapper">
            <div className="album-name">{albumDetail.name}</div>
            <div className="artist-name"> {albumDetail.artist}</div>
          </div>
          <div className="play-ico pl-2">
            <a href={albumDetail.link} target="_blank">
              <PlayCircleFilledIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
