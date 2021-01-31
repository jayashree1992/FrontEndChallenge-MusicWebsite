import { combineReducers } from "redux";
import AlbumListReducer from "../redux/album/reducer";

const RootReducer = combineReducers({
  AlbumList: AlbumListReducer,
});

export default RootReducer;
