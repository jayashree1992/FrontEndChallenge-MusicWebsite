import React, { Fragment } from "react";
import Navigation from "../components/Navigation/Navigation";
import Banner from "../components/Banner/Banner";
import "../stylesheets/main.scss";
import CarouselGallery from "../components/Card/CarouselGallery";

const Home = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 m-0 p-0">
            <Navigation />
          </div>
          <div className="col-md-10 m-0 p-0 content-box">
            <Banner/>
            <CarouselGallery/>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
