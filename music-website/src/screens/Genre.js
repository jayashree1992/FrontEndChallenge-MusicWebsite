import React from 'react';
import { useSelector } from 'react-redux';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import Masonary from '../components/Masonary/Masonary';
import { uniqueCategories } from '../utils/helpers';

const Genre = () => {
  // getting the entire album list from redux
  const list = useSelector(state => state.AlbumList.albums);
  const albumList = Object.values(list);

  const categories = uniqueCategories(albumList);

  return (
    <MainWrapper>
      <Masonary categories={categories} />
    </MainWrapper>
  );
};

export default Genre;
