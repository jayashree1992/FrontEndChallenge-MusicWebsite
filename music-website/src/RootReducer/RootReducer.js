import { combineReducers } from "redux";
import AlbumListReducer from "../redux/album/reducer";
import PlayListReducer from "../redux/playlist/reducer";

const RootReducer = combineReducers({
  AlbumList: AlbumListReducer,
  PlayList: PlayListReducer
});

export default RootReducer;
