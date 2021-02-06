import {
  SET_PLAY_LIST,
  REMOVE_PLAYLIST,
  REMOVE_ALBUM_FROM_PLAYLIST,
} from "./types";
import { filter } from "lodash";

const initialState = {
  playLists: {},
};

const PlayListReducer = (state = initialState, action) => {
  const playListPresent = (playLists, playListName) => {
    return playLists[playListName] === (null || undefined) ? false : true;
  };

  switch (action.type) {
    case SET_PLAY_LIST: {
      let playLists = { ...state.playLists };
      const playListName = action.playListName;
      const albumId = action.albumId;

      if (playListPresent(playLists, playListName)) {
        let uniqueAlbums = new Set(playLists[playListName]);
        uniqueAlbums.add(albumId);
        playLists[playListName] = Array.from(uniqueAlbums);
      } else {
        playLists[playListName] = [albumId];
      }

      return {
        playLists: playLists,
      };
    }

    case REMOVE_PLAYLIST: {
      let playLists = { ...state.playLists };
      delete playLists[action.playListName];

      return {
        playLists: playLists,
      };
    }

    case REMOVE_ALBUM_FROM_PLAYLIST: {
      let newPlayList = {...state.playLists};
      let albumsInCurrentPlayList = newPlayList[action.playListName];
      albumsInCurrentPlayList = filter(albumsInCurrentPlayList, (albumId) => {
        return albumId !== action.albumId;
      });

      newPlayList[action.playListName] = albumsInCurrentPlayList;

      return {
        playLists: newPlayList,
      };
    }

    default:
      return state;
  }
};

export default PlayListReducer;
