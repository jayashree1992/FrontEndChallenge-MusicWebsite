import React, { Fragment, useState } from "react";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import Card from "../components/Card/Card";
import { useSelector } from "react-redux";
import PLayListModal from "../components/PlayList/PlayListModal";



const SearchResults = (props) => {
  const urlParams = new URLSearchParams(props.location.search);
  const searchTerm = urlParams.get("search_term");
  const list = useSelector((state) => state.AlbumList.albums);
  const filteredResults = list.filter(name =>
     name.namePlusArtist.toString().toLowerCase().includes(searchTerm.toString().toLowerCase())
  );

  const [modalOpen, setModalOpen] = useState(false);
  const [currentAlbumId, setCurrentAlbumId] = useState(null);


  const handleModalOpen = (albumId) => {
    setModalOpen(true);
    setCurrentAlbumId(albumId);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const searchPageContent = () => {
    return (  
      <Fragment>
      <div className="row p-4 mt-5" style={{transition: 'all .50s fade-in'}}>
      {filteredResults.map((results) => (
        <div className="col-6 col-sm-4 col-md-4 col-lg-2">
        <Card
        isFlip={false}
        handleModalOpen={() => handleModalOpen(results.id)}
        albumDetail={results}
      />
        </div>
      ))}
      <PLayListModal
      open={modalOpen}
      handleModalClose={handleModalClose}
      albumId={currentAlbumId}
    />
      </div>
      </Fragment>
    );
  };
  return <MainWrapper content={searchPageContent()} />

}

export default SearchResults;
