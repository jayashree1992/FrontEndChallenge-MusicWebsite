import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import Card from "./Card";
import { useSelector } from "react-redux";
import { ALBUM_LOAD_LIMIT as LIMIT, responsiveCarousel } from "../../constants";
import "react-multi-carousel/lib/styles.css";
import _ from "lodash";
import PLayListModal from "../../components/PlayList/PlayListModal";

const CarouselGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);
  const list = useSelector((state) => state.AlbumList.albums);
  const albumList = _.slice(list, 0, LIMIT);

  const handleModalOpen = (albumId) => {
    setModalOpen(true);
    setCurrentAlbumId(albumId);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };
  const showAlbums = () => {
    return (
      <Carousel responsive={responsiveCarousel} autoPlay>
        {albumList.map((album) => (
          <Card
            isFlip={true}
            imgSource={album.image_170}
            title={album.name}
            artist={album.artist}
            link={album.link}
            handleModalOpen={() => handleModalOpen(album.id)}
          />
        ))}
      </Carousel>
    );
  };
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
