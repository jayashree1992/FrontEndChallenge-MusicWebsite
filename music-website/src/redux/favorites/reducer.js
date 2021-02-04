import { SET_FAV, REMOVE_FAV } from "./types";
import _ from "lodash";

const initialState = {
  favorites: [],
};

const FavoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAV: {
      return {
        favorites: [...state.favorites, action.albumId],
      };
    }

    case REMOVE_FAV: { 
     const newFavorites = _.filter(state.favorites, (element)=>{return element !== action.albumId})
      return {
        favorites: newFavorites,
      };
    }

    default:
      return state;
  }
};

export default FavoriteReducer;
