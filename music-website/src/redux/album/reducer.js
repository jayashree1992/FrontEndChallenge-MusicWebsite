import { SET_ALBUM_LIST, ALBUM_LIST_FAIL } from "./types";

const initialState = {
  loading: true,
  albums: [],
  errorMsg: "",
};

const AlbumListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUM_LIST: {
      return {
        ...state,
        loading: false,
        albums: action.payload,
        errorMsg: "",
      };
    }

    case ALBUM_LIST_FAIL: {
      return {
        ...state,
        loading: false,
        errorMsg: action.errorMsg,
      };
    }

    default:
      return state;
  }
};

export default AlbumListReducer;
