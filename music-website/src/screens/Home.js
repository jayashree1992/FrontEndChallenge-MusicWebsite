import React, { useState } from 'react';

import '../stylesheets/main.scss';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import Banner from '../components/Banner/Banner';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import CarouselGallery from '../components/Card/CarouselGallery';
import Button from '../components/Button/Button';
import SearchBar from '../components/SearchBar/SearchBar';
import ListBox from '../components/ListBox/ListBox';
import PLayListModal from '../components/PlayList/PlayListModal';
import ColoredBlock from '../components/ColoredBlock/ColoredBlock';
import { uniqueCategories } from '../utils/helpers';
import Footer from '../components/Footer/Footer';

const Home = () => {
  const list = useSelector(state => state.AlbumList.albums);
  const albumList = Object.values(list);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  // Formatting Release Date and Sorting it in descending order
  const latestAlbums = albumList
    .slice()
    .sort((a, b) => Date.parse(b.releaseDate) - Date.parse(a.releaseDate));

  // Getting top five results from the sorted list of albums
  const topFiveLatestAlbums = latestAlbums.slice(0, 5);

  const categories = uniqueCategories(albumList);

  // Getting six results from the list of categories
  const limitedUniqueCategories = categories.slice(0, 6);

  const handleModalOpen = albumId => {
    setModalOpen(true);
    setCurrentAlbumId(albumId);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  // function to render home page components
  return (
    <MainWrapper>
      <SearchBar />
      <Banner />
      <div className="banner-space">
      <div className="p-4">
        <Button
          url="/album"
          label="See more"
          customStyle="react-multi-carousel-list browse-btn"
        />
      </div>
      <CarouselGallery />
      </div>
      <div className="d-flex ml-3 mr-4 flex-column flex-sm-column flex-md-column flex-lg-row flex-xl-row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <div className="heading pb-3 ml-1">Latest Releases</div>
          {topFiveLatestAlbums.map(album => (
            <ListBox
              album={album}
              handleModalOpen={() => handleModalOpen(album.id)}
              key={album.id}
            />
          ))}
        </div>

        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 mt-4 mt-lg-0">
          <div className="heading pb-2 ml-1">Genre</div>
          <ColoredBlock categories={limitedUniqueCategories} />
        </div>
      </div>

      <Footer />
      <PLayListModal
        open={modalOpen}
        handleModalClose={handleModalClose}
        albumId={currentAlbumId}
      />
    </MainWrapper>
  );
};

export default Home;
