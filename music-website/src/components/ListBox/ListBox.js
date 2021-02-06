import React, { Fragment } from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import VisibilityIcon from '@material-ui/icons/Visibility';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import './_listbox.scss';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { find } from 'lodash';
import { addFavorites, removeFavorites } from '../../redux/favorites/action';
import { removeAlbumFromPlayList } from '../../redux/playlist/action';

const ListBox = props => {
  const favoriteList = useSelector(state => state.FavoriteList.favorites);
  const isFavoriteAlbum = find(
    favoriteList,
    albumId => albumId === props.album.id
  );

  const dispatch = useDispatch();

  const handleFavorite = albumId => {
    if (isFavoriteAlbum) {
      dispatch(removeFavorites(albumId));
    } else {
      dispatch(addFavorites(albumId));
    }
  };

  const removeAlbum = () => {
    dispatch(removeAlbumFromPlayList(props.playListName, props.album.id));
  };

  function truncate(str, n){
    return (str.length > n) ? str.substr(0, n-1) + `...` : str;
  };

  return (
    <>
      <div className="heading pb-2">{props.heading}</div>
      <div className="d-flex flex-row justify-content-between cust-list-box pb-2 pt-2">
        <div className="d-flex flex-row">
          <div className="p-1">
            <img src={props.album.image_55} alt="" className="img-round" />
          </div>

          <div className="d-flex flex-column flex-md-row pt-md-2">
            <div className="ml-1 mt-1 ml-md-3">{truncate(props.album.name,20)}</div>

            <div className="ml-1 mt-md-1 artist-name">
              {'-'}
              {props.album.artist}
            </div>
          </div>
        </div>

        <div className="p-2 mt-1">
          <div className="ico-block">
            {isFavoriteAlbum ? (
              <button
                onClick={() => handleFavorite(props.album.id)}
                className=""
              >
                <FavoriteIcon className="heart-ico-filled list-ico-20" />
              </button>
            ) : (
              <button onClick={() => handleFavorite(props.album.id)}>
                <FavoriteBorderIcon className="list-ico-20" />
              </button>
            )}

            <NavLink
              to={{
                pathname: `album/${props.album.id}`,
              }}
            >
              <VisibilityIcon className="view-ico list-ico-20" />
            </NavLink>

            {props.isPlayList ? (
              <button onClick={removeAlbum} className="">
                {' '}
                <DeleteIcon className=" list-ico-22" />
              </button>
            ) : (
              <button className="add-btn" onClick={props.handleModalOpen}>
                <PlaylistAddIcon className="add-ico list-ico-22" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListBox;
