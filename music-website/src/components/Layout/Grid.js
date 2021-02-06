import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { slice, concat } from 'lodash';
import MainWrapper from '../MainWrapper/MainWrapper';
import '../../stylesheets/main.scss';
import Card from '../Card/Card';
import { ALBUM_LOAD_LIMIT as LIMIT } from '../../constants';
import PLayListModal from '../PlayList/PlayListModal';

const Grid = props => {
  const { list } = props;
  const favoriteAlbums = useSelector(state => state.FavoriteList.favorites);
  const [showMoreAlbums, setShowMoreAlbums] = useState(list.length > LIMIT);
  const initialAlbumList = slice(list, 0, LIMIT);
  const [albumList, setAlbumList] = useState(initialAlbumList);
  const [index, setIndex] = useState(LIMIT);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const loadMoreAlbums = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < list.length - 1;
    const newList = concat(
      redefinedAlbumList(),
      slice(list, index, newIndex)
    );
    setIndex(newIndex);
    setAlbumList(newList);
    setShowMoreAlbums(newShowMore);
  };

  const redefinedAlbumList = () => albumList.length > 0 ? albumList : initialAlbumList;

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

  React.useEffect(()=>{
    if(props.favoritePage){
      setAlbumList(initialAlbumList);
    }
  },[favoriteAlbums])

  return (
    <MainWrapper>
      <h1 className="title">{props.title}</h1>
      <div className="row p-4">
        {redefinedAlbumList().map(album => (
          <div className="col-6 col-sm-4 col-md-4 col-lg-3 p-2">
            <Card
              handleModalOpen={() => handleModalOpen(album.id)}
              albumDetail={album}
              key={album.id}
              favorite={isFavoriteAlbum(album.id)}
            />
          </div>
        ))}
      </div>
      {showMoreAlbums && (
        <div className="col text-center">
          <button onClick={loadMoreAlbums} className="load-more">
            Load More
          </button>
        </div>
      )}
      <PLayListModal
        open={modalOpen}
        handleModalClose={handleModalClose}
        albumId={currentAlbumId}
      />
    </MainWrapper>
  );
};

export default Grid;
