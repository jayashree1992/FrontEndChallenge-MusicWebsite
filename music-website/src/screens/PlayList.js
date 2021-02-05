import React from "react";
import Accordian from "../components/Accordian/Accordian";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { useSelector } from "react-redux";

const PlayList = () => {
  const playList = useSelector((state) => state.PlayList.playLists);

  const accordianContent = () => {
    return (
      <div style={{ width: "80%", marginLeft: "10%", marginTop: "20px" }}>
        {Object.keys(playList).map(function (key) {
          return <Accordian playListName={key} albumIds={playList[key]} />;
        })}
      </div>
    );
  };

  return <MainWrapper content={accordianContent()} />;
};

export default PlayList;
