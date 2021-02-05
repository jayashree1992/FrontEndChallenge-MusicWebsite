import React from "react";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import Masonary from "../components/Masonary/Masonary";
import { useSelector } from "react-redux";
import {uniqueCategories} from "../utils/helpers";

const Genre = () => {
  // getting the entire album list from redux
  const albumList = useSelector((state) => state.AlbumList.albums);

  const categories = uniqueCategories(albumList);

  const genreContent = () => {
    return <Masonary categories={categories} />;
  };

  return <MainWrapper content={genreContent()} />;
};

export default Genre;
