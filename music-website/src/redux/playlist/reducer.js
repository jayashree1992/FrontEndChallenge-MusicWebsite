import { SET_PLAY_LIST } from "./types";

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

    default:
      return state;
  }
};

export default PlayListReducer;
