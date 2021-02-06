import React from 'react';
import { useSelector } from 'react-redux';
import { filter } from 'lodash';
import Grid from '../components/Layout/Grid';
import EmptyResults from '../components/EmptyResults/EmptyResults';

const Favorite = () => {
  const favorites = useSelector(state => state.FavoriteList.favorites);
  let albumList = useSelector(state => state.AlbumList.albums);
  albumList = filter(albumList, o => favorites.includes(o.id));

  return albumList.length > 0 ? (
    <Grid list={albumList} favoritePage={true} title="Your Favorites" />
  ) : (
    <EmptyResults mainwrapper msg="Favorites yet!" btnMsg="Add your Favorites" />
  );
};

export default Favorite;
