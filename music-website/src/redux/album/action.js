import { SET_ALBUM_LIST, ALBUM_LIST_FAIL } from "./types";
import axios from "axios";

export const getAlbumList = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `https://itunes.apple.com/us/rss/topalbums/limit=100/json`
    );
    //Formatting response from the itunes api for better readability
    let albums = res.data.feed.entry.map((album) => {
      return {
        name: album['im:name']['label'],
        image_55: album['im:image'][0]['label'],
        image_60: album['im:image'][1]['label'],
        image_170: album['im:image'][2]['label'],
        price: album['im:price']['label'],
        namePlusArtist: album['title']['label'],
        link:album['link']['attributes']['href'],
        id:album['id']['attributes']['im:id'],
        artist: album['im:artist']['label'],
        artistLink: album['im:artist']['attributes'] == null ? null : album['im:artist']['attributes']['href'],
        category: album['category']['attributes']['label'],
        categoryLink: album['category']['attributes']['scheme'],
        releaseDate:album['im:releaseDate']['label'],
        releaseDateFormatted:album['im:releaseDate']['attributes']['label']
      }
    });

    dispatch({
      type: SET_ALBUM_LIST,
      payload: albums,
    });
  } catch (e) {
    dispatch({
      type: ALBUM_LIST_FAIL,
      errorMsg: "Unable to Load Albums",
    });
  }
};
