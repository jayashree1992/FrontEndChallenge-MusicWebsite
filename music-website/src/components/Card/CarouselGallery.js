import React from "react";
import Carousel from "react-multi-carousel";
import Card from "./Card";
import {useSelector } from "react-redux";
import "react-multi-carousel/lib/styles.css";
import _ from "lodash";
import { NavLink } from "react-router-dom";
import {ALBUM_LOAD_LIMIT as LIMIT} from "../../constants";

const CarouselGallery = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const list = useSelector((state) => state.AlbumList.albums);
  const albumList = _.slice(list, 0, LIMIT);

  const showAlbums = () => {
    return (
      <Carousel responsive={responsive} autoPlay>
        {albumList.map((album) => (
          <NavLink to="/album/1549768766">
            <Card
            imgSource={album.image_170}
            title={album.name}
            />
          </NavLink>
        ))}
      </Carousel>
    );
  };

  return <div className="p-4">{showAlbums()}</div>;
};

export default CarouselGallery;
