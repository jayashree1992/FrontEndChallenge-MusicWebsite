import React from "react";
import MainWrapper from "../components/MainWrapper/MainWrapper";

const AlbumDetails = (props) => {
  const albumDetails = props.location.albumDetail;

  const albumDetailContent = () => {


    

  };

  return <MainWrapper content={albumDetailContent()} />;
};

export default AlbumDetails;
