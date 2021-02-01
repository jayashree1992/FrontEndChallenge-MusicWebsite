import React, { Fragment } from "react";
import Navigation from "../components/Navigation/Navigation";
import Banner from "../components/Banner/Banner";
import "../stylesheets/main.scss";
import CarouselGallery from "../components/Card/CarouselGallery";
import Button from "../components/Button/Button";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 m-0 p-0">
            <Navigation />
          </div>
          <div className="col-md-10 m-0 p-0 content-box">
            <Banner />
            <div className="p-4">
              <Button
                url="/album"
                label="See more"
                customStyle="react-multi-carousel-list browse-btn"
              />
            </div>
            <CarouselGallery />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
