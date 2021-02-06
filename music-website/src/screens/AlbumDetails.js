import React from 'react';
import { useSelector } from 'react-redux';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import './_screens.scss';

const AlbumDetails = props => {
  const albumList = useSelector(state => state.AlbumList.albums);
  const albumId = props.match.params.id;
  const albumDetails = albumList[albumId];

  return (
    <MainWrapper>
      {albumDetails && (
        <div className="content-wrapper">
          <div className="d-flex flex-column justify-content-center">
            <div className="col-md-12">
              <img
                src={albumDetails.image_170}
                alt=""
                className="img-responsive center-block d-block mx-auto img-album-detail"
              />
            </div>

            <div className="col-md-12 content-album-detail">
              <div className="album-name">{albumDetails.name}</div>
              <div className="album-artist">{albumDetails.artist}</div>
              <div className="album-category">{albumDetails.category}</div>
              <a href={albumDetails.link} target="_blank" rel="noreferrer">
                View Album
              </a>
              <div className="album-price-date">
                <div className="">
                  {'Price: '}
                  {albumDetails.price}
                </div>
                <div className="">
                  {'Release Date: '}
                  {albumDetails.releaseDateFormatted}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </MainWrapper>
  );
};

export default AlbumDetails;
