import { SET_FAV, REMOVE_FAV } from "./types";

export const addFavorites = (albumId) => async (dispatch) => {
  dispatch({
    type: SET_FAV,
    albumId: albumId,
  });
};

export const removeFavorites = (albumId) => async (dispatch) => {
  dispatch({
    type: REMOVE_FAV,
    albumId: albumId,
  });
};

