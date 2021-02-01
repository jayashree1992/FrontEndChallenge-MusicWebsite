import React, { Fragment } from "react";
import "../stylesheets/main.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumList } from "../redux/album/action";
import Navigation from "../components/Navigation/Navigation";
import Card from "../components/Card/Card";
import { NavLink } from "react-router-dom";
import "../stylesheets/main.scss";
import _ from "lodash";

const Album = (props) => {
  const dispatch = useDispatch();
  const albumList = useSelector((state) => state.AlbumList);

  React.useEffect(() => {
    fetchAlbumList();
  }, []);

  const fetchAlbumList = () => {
    dispatch(getAlbumList(10));
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
            <div class="row p-4">
              {albumList.albums.map((album) => (
                <div className="col-6 col-sm-3 col-md-2">
                <NavLink to="/album/:album">
                    <Card
                      imgSource={_.get(album, "im:image[2].label")}
                      title={_.get(album, "title.label")}
                    />
                </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Album;
