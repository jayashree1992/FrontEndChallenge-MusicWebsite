import React, { Fragment } from "react";

import "../stylesheets/main.scss";
import "react-multi-carousel/lib/styles.css";

import Banner from "../components/Banner/Banner";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import CarouselGallery from "../components/Card/CarouselGallery";
import Button from "../components/Button/Button";
import SearchBar from "../components/SearchBar/SearchBar";

const Home = () => {
  //function to render home page components
  const homePageContent = () => {
    return (  
      <Fragment>
        <SearchBar />
        <Banner />
        <div className="p-4">
          <Button
            url="/album"
            label="See more"
            customStyle="react-multi-carousel-list browse-btn"
          />
        </div>
        <CarouselGallery />
      </Fragment>
    );
  };

  return <MainWrapper content={homePageContent()} />;
};

export default Home;
