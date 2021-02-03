import React, { Fragment } from "react";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import Banner from "../components/Banner/Banner";
import CarouselGallery from "../components/Card/CarouselGallery";
import Button from "../components/Button/Button";

//function to render home page components
const homePageContent = () => {
  return (
    <Fragment>
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

const Home = () => {
  return <MainWrapper content={homePageContent()} />;
};

export default Home;
