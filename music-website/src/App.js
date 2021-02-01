import React, { Fragment } from "react";
import Routes from "./routes/Routes";
import { useDispatch } from "react-redux";
import { getAlbumList } from "./redux/album/action";
import "./stylesheets/main.scss";

const App = (props) => {
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    fetchAlbumList();
  }, []);

  const fetchAlbumList = () => {
    dispatch(getAlbumList());
  };

  return (
    <Fragment>
      <Routes />
    </Fragment>
  );
};

export default App;
