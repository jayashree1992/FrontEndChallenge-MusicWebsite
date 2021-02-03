import { SET_PLAY_LIST } from "./types";

export const setPlayList = (playListName, albumId) => async (dispatch) => {
  dispatch({
    type: SET_PLAY_LIST,
    playListName: playListName,
    albumId: albumId,
  });
};
