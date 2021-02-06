import React from 'react';
import './_card.scss';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addFavorites, removeFavorites } from '../../redux/favorites/action';

const Card = props => {
  const dispatch = useDispatch();

  const handleFavorite = albumId => {
    if (props.favorite) {
      dispatch(removeFavorites(albumId));
    } else {
      dispatch(addFavorites(albumId));
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="card mb-2 card-img-custom">
          <img
            src={props.albumDetail.image_170}
            className="card-img-top img-fluid"
            alt=""
          />
        </div>

        <div className="card-body pt-0">
          <div className="d-flex flex-row justify-content-between">
            <div className="album-artist-name-wrapper">
              <div className="album-name">{props.albumDetail.name}</div>
              <div className="artist-name">
                {' '}
                {'-'}
                {props.albumDetail.artist}
              </div>
              <div className="ico-wrapper d-flex flex-row justify-content-between">
                <div>
                  {props.favorite ? (
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
                      pathname: `album/${props.albumDetail.id}`
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

            <div className="play-ico">
              <a href={props.albumDetail.link} target="_blank" rel="noreferrer">
                <PlayArrowIcon fontSize="default" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
