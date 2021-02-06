import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import { useSelector } from 'react-redux';
import { slice } from 'lodash';
import Card from './Card';
import { ALBUM_LOAD_LIMIT as LIMIT, responsiveCarousel } from '../../constants';
import 'react-multi-carousel/lib/styles.css';
import PLayListModal from '../PlayList/PlayListModal';

const CarouselGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);
  const list = useSelector(state => state.AlbumList.albums);
  const favoriteAlbums = useSelector(state => state.FavoriteList.favorites);
  const albumList = Object.values(list);
  const carousalAlbums = slice(albumList, 0, LIMIT);

  const handleModalOpen = albumId => {
    setModalOpen(true);
    setCurrentAlbumId(albumId);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const isFavoriteAlbum = (albumId) => {
    return favoriteAlbums.includes(albumId)
  }

  const showAlbums = () => (
    <Carousel responsive={responsiveCarousel} autoPlay>
      {carousalAlbums.map(album => (
        <Card
          handleModalOpen={() => handleModalOpen(album.id)}
          albumDetail={album}
          key={album.id}
          favorite={isFavoriteAlbum(album.id)}
        />
      ))}
    </Carousel>
  );

  return (
    <div className="p-4">
      {showAlbums()}
      <PLayListModal
        open={modalOpen}
        handleModalClose={handleModalClose}
        albumId={currentAlbumId}
      />
    </div>
  );
};

export default CarouselGallery;
