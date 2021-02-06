import React, { useState, Fragment } from "react";
import "./_card.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import _ from "lodash";
import { addFavorites, removeFavorites } from "../../redux/favorites/action";

const Card = (props) => {
  const favoriteList = useSelector((state) => state.FavoriteList.favorites);
  const is_favorite_album = _.find(
    favoriteList,
    (albumId) => albumId === props.albumDetail.id
  );
  const [favorite, setFavorite] = useState(is_favorite_album);

  const dispatch = useDispatch();

  const handleFavorite = (albumId) => {
    if (favorite) {
      dispatch(removeFavorites(albumId));
      setFavorite(false);
    } else {
      dispatch(addFavorites(albumId));
      setFavorite(true);
    }
  };

  return (
    <Fragment>
      <div className="card-container">
        <div className="card mb-2 card-img-custom">
          <img
            src={props.albumDetail.image_170}
            className="card-img-top img-fluid"
            alt=""
          ></img>
        </div>

        <div className="card-body pt-0">
          <div className="d-flex flex-row justify-content-between">
         

            <div className="album-artist-name-wrapper">
              <div className="album-name">{props.albumDetail.name}</div>
              <div className="artist-name">
                {" "}
                {`-`}
                {props.albumDetail.artist}
              </div>

              <div className="ico-wrapper d-flex flex-row justify-content-between">
              <div>
              {favorite ? (
                <button
                  onClick={() => handleFavorite(props.albumDetail.id)}
                  className="heart-btn"
                >
                  <FavoriteIcon className="heart-ico-filled" />
                </button>
              ) : (
                <button
                  onClick={() => handleFavorite(props.albumDetail.id)}
                  className="heart-btn"
                >
                  <FavoriteBorderIcon className="heart-ico" />
                </button>
              )}
            </div>
                <div className="">
                  <NavLink
                    to={{
                      pathname: `album/${props.albumDetail.id}`,
                      albumDetail: props.albumDetail,
                    }}
                  >
                    <VisibilityIcon className="view-ico" />
                  </NavLink>
                </div>

                <div>
                  <button className="add-btn" onClick={props.handleModalOpen}>
                    <PlaylistAddIcon className="add-ico" />
                  </button>
                </div>
              </div>
            </div>

            <div className="play-ico pl-2">
              <a href={props.albumDetail.link} target="_blank">
                <PlayCircleFilledIcon fontSize="large" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Card;
