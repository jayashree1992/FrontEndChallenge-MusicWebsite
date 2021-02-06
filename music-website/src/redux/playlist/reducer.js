import { filter } from 'lodash';
import {
  SET_PLAY_LIST,
  REMOVE_PLAYLIST,
  REMOVE_ALBUM_FROM_PLAYLIST,
} from './types';

const initialState = {
  playLists: {},
};

const PlayListReducer = (state = initialState, action) => {
  const playListPresent = (playLists, playListName) => playLists[playListName]
    !== (null || undefined);

  switch (action.type) {
    case SET_PLAY_LIST: {
      const playLists = { ...state.playLists };
      const { playListName } = action;
      const { albumId } = action;

      if (playListPresent(playLists, playListName)) {
        const uniqueAlbums = new Set(playLists[playListName]);
        uniqueAlbums.add(albumId);
        playLists[playListName] = Array.from(uniqueAlbums);
      } else {
        playLists[playListName] = [albumId];
      }

      return {
        playLists,
      };
    }

    case REMOVE_PLAYLIST: {
      const playLists = { ...state.playLists };
      delete playLists[action.playListName];

      return {
        playLists,
      };
    }

    case REMOVE_ALBUM_FROM_PLAYLIST: {
      const newPlayList = { ...state.playLists };
      let albumsInCurrentPlayList = newPlayList[action.playListName];
      albumsInCurrentPlayList = filter(albumsInCurrentPlayList,
        albumId => albumId !== action.albumId);

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
