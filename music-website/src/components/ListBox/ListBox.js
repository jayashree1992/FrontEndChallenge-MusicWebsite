import React, { useState, Fragment } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";
import "./_listbox.scss";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { find } from "lodash";
import { addFavorites, removeFavorites } from "../../redux/favorites/action";
import { removeAlbumFromPlayList } from "../../redux/playlist/action";

const ListBox = (props) => {
  const favoriteList = useSelector((state) => state.FavoriteList.favorites);
  const is_favorite_album = find(
    favoriteList,
    (albumId) => albumId === props.album.id
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

  const removeAlbum = () => {
    dispatch(removeAlbumFromPlayList(props.playListName, props.album.id));
  };

  return (
    <Fragment>
      <div className="heading pb-2">{props.heading}</div>
      <div class="d-flex flex-row justify-content-between cust-list-box pb-2 pt-2">
        <div class="d-flex flex-row">
          <div class="p-1">
            <img src={props.album.image_55} alt="" className="img-round" />
          </div>

          <div class="d-flex flex-column flex-md-row pt-md-2">
            <div class="ml-1 mt-1 ml-md-3">{props.album.name}</div>

            <div class="ml-1 mt-md-1 artist-name">
              {`-`}
              {props.album.artist}
            </div>
          </div>
        </div>

        <div class="p-2 mt-1">
          <div className="ico-block">
            {favorite ? (
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
                albumDetail: props.album,
              }}
            >
              <VisibilityIcon className="view-ico list-ico-20" />
            </NavLink>

            {props.isPlayList ? (
              <button onClick={removeAlbum} className="">
                {" "}
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
    </Fragment>
  );
};

export default ListBox;
