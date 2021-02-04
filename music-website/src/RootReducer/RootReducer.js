import { combineReducers } from "redux";
import AlbumListReducer from "../redux/album/reducer";
import PlayListReducer from "../redux/playlist/reducer";
import FavoriteReducer from "../redux/favorites/reducer";

const RootReducer = combineReducers({
  AlbumList: AlbumListReducer,
  PlayList: PlayListReducer,
  FavoriteList : FavoriteReducer,
});

export default RootReducer;
