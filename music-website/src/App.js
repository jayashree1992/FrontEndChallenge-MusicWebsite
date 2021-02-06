import React from 'react';
import { useDispatch } from 'react-redux';
import Routes from './routes/Routes';
import { getAlbumList } from './redux/album/action';
import './stylesheets/main.scss';

const App = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchAlbumList();
  }, []);

  const fetchAlbumList = () => {
    dispatch(getAlbumList());
  };

  return <Routes />
};

export default App;
