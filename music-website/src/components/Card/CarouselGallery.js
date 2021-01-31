import React from "react";
import Carousel from "react-multi-carousel";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumList } from "../../redux/album/action";
import "react-multi-carousel/lib/styles.css";
import _ from "lodash";

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

  const dispatch = useDispatch();
  const albumList = useSelector((state) => state.AlbumList);

  React.useEffect(() => {
    fetchAlbumList();
  }, []);

  const fetchAlbumList = () => {
    dispatch(getAlbumList(10));
  };

  const showAlbums = () => {
    return (
      <Carousel responsive={responsive} autoPlay>
        {albumList.albums.map((album) => (
          <a href="#">
            {" "}
            <Card
              imgSource={_.get(album, "im:image[2].label")}
              title={_.get(album, "title.label")}
            />
          </a>
        ))}
      </Carousel>
    );
  };

  return <div className="p-4">{albumList.loading ? null : showAlbums()}</div>;
};

export default CarouselGallery;
