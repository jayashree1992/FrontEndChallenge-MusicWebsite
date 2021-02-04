import React, { Fragment, useState } from "react";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import "../stylesheets/main.scss";
import { useSelector } from "react-redux";
import Card from "../components/Card/Card";
import "../stylesheets/main.scss";
import _ from "lodash";
import "../stylesheets/main.scss";
import { ALBUM_LOAD_LIMIT as LIMIT } from "../constants";
import PLayListModal from "../components/PlayList/PlayListModal";

const Album = (props) => {
  const list = useSelector((state) => state.AlbumList.albums);
  const [showMoreAlbums, setShowMoreAlbums] = useState(true);
  const initialAlbumList = _.slice(list, 0, LIMIT);
  const [albumList, setAlbumList] = useState(initialAlbumList);
  const [index, setIndex] = useState(LIMIT);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);

  const loadMoreAlbums = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < list.length - 1;
    const newList = _.concat(
      redefinedAlbumList(),
      _.slice(list, index, newIndex)
    );
    setIndex(newIndex);
    setAlbumList(newList);
    setShowMoreAlbums(newShowMore);
  };

  const redefinedAlbumList = () => {
    return albumList.length > 0 ? albumList : initialAlbumList;
  };

  const handleModalOpen = (albumId) => {
    setModalOpen(true);
    setCurrentAlbumId(albumId);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  //function to render home page components
  const albumPageContent = () => {
    return (
      <Fragment>
        <h1 className="title">{`Albums`}</h1>
        <div className="row p-4">
          {redefinedAlbumList().map((album) => (
            <div className="col-6 col-sm-4 col-md-4 col-lg-2 p-2">
              <Card
                isFlip={false}
                handleModalOpen={() => handleModalOpen(album.id)}
                albumDetail={album}
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
      </Fragment>
    );
  };

  return <MainWrapper content={albumPageContent()} />;
};

export default Album;
