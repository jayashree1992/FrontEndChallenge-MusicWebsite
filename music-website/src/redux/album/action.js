import { SET_ALBUM_LIST, ALBUM_LIST_FAIL } from "./types";
import axios from "axios";

export const getAlbumList = (limit) => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://itunes.apple.com/us/rss/topalbums/limit=${limit}/json`
    );
    dispatch({
      type: SET_ALBUM_LIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: ALBUM_LIST_FAIL,
      errorMsg: "Unable to Load Albums",
    });
  }
};
