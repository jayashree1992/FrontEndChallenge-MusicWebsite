import {
  SET_PLAY_LIST,
  REMOVE_PLAYLIST,
  REMOVE_ALBUM_FROM_PLAYLIST,
} from "./types";

export const setPlayList = (playListName, albumId) => async (dispatch) => {
  dispatch({
    type: SET_PLAY_LIST,
    playListName: playListName,
    albumId: albumId,
  });
};

export const removePlayList = (playListName) => async (dispatch) => {
  dispatch({
    type: REMOVE_PLAYLIST,
    playListName: playListName,
  });
};

export const removeAlbumFromPlayList = (playListName, albumId) => async (
  dispatch
) => {
  dispatch({
    type: REMOVE_ALBUM_FROM_PLAYLIST,
    playListName: playListName,
    albumId: albumId,
  });
};
