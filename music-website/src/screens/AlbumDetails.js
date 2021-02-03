import React from "react";

const AlbumDetails = (props) => {
  const albumDetails = props.location.albumDetail;
  return (
    <h1>
      AlbumDetails
      <span>{albumDetails.name}</span>
    </h1>
  );
};

export default AlbumDetails;
