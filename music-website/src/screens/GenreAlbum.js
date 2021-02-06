import React from 'react';
import { useSelector } from 'react-redux';
import { filter } from 'lodash';
import Grid from '../components/Layout/Grid';
import { formatGenre } from '../utils/helpers';

const GenreAlbum = props => {
  const { genre } = props.match.params;
  let albumList = useSelector(state => state.AlbumList.albums);
  albumList = Object.values(albumList);
  albumList = filter(
    albumList,
    album => formatGenre(album.category) === genre
  );

  return (albumList.length > 0 && <Grid list={albumList} title={albumList[0].category} />)
};

export default GenreAlbum;
