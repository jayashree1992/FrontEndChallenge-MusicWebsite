import { SET_ALBUM_LIST, ALBUM_LIST_FAIL } from "./types";
import axios from "axios";

export const getAlbumList = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://itunes.apple.com/us/rss/topalbums/limit=100/json`
    );
    // let albums = res.data.feed.entry;
    // albums.map((album) => {
    //   return {
    //     name: album['im:name']['label'],

    //   }
    // });
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
