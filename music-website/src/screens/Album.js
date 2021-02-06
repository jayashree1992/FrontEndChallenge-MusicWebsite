import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '../components/Layout/Grid';

const Album = () => {
  let albumList = useSelector(state => state.AlbumList.albums);
  albumList = Object.values(albumList);

  return <Grid list={albumList} title="Albums" />;
};

export default Album;
