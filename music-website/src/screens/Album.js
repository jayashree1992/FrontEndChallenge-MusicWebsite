import React, { Fragment, useState } from "react";
import "../stylesheets/main.scss";
import { useSelector } from "react-redux";
import Navigation from "../components/Navigation/Navigation";
import Card from "../components/Card/Card";
import { NavLink } from "react-router-dom";
import "../stylesheets/main.scss";
import _ from "lodash";
import "../stylesheets/main.scss";
import { ALBUM_LOAD_LIMIT as LIMIT } from "../constants";

const Album = (props) => {
  const [showMoreAlbums, setShowMoreAlbums] = useState(true);
  const list = useSelector((state) => state.AlbumList.albums);
  const initialAlbumList = _.slice(list, 0, LIMIT);
  const [albumList, setAlbumList] = useState(initialAlbumList);
  const [index, setIndex] = useState(LIMIT);

  const loadMoreAlbums = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < list.length - 1;
    const newList = _.concat(redefinedAlbumList(), _.slice(list, index, newIndex));

    setIndex(newIndex);
    setAlbumList(newList);
    setShowMoreAlbums(newShowMore);
  };

  const redefinedAlbumList = () => {
    return albumList.length > 0 ? albumList : initialAlbumList;
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 m-0 p-0">
            <Navigation />
          </div>
          <div className="col-md-10 m-0 p-0 content-box">
            <h1 className="title">{`Albums`}</h1>
            <div className="row p-4">
              {redefinedAlbumList().map((album) => (
                <div className="col-6 col-sm-4 col-md-4 col-lg-2">
                  <NavLink to="/album/:album">
                    <Card
                      imgSource={_.get(album, "im:image[2].label")}
                      title={_.get(album, "title.label")}
                    />
                  </NavLink>
                </div>
              ))}
            </div>
            {showMoreAlbums && (
              <div className="col text-center">
              <button onClick={loadMoreAlbums} className="load-more"> Load More </button>
            </div>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Album;
