import React from "react";
import Accordian from "../components/Accordian/Accordian";
import MainWrapper from "../components/MainWrapper/MainWrapper";
import { useSelector } from "react-redux";
import _ from "lodash";

const PlayList = () => {

  const playList = useSelector((state) => state.PlayList.playLists);
  const albumList = useSelector((state) => state.AlbumList.albums);

    const accordianContent = () => {
      return (
        <div style={{width:'80%',marginLeft:'10%',marginTop:'20px'}}>
        
        {

         Object.keys(playList).map(function(key) {
            return  <Accordian playListName={key} albumIds={playList[key]}/>
        })}
       
        </div>
      );
    };

      return (<MainWrapper content={accordianContent()} />);
    };
    
    export default PlayList;
      // Object.keys(playList).map(function(key, index) {
          //   console.log('playList[key]',playList[index]);
          //   <Accordian name={playList[index]}/>
          // })

          // Object.entries(playList).forEach(entry => {
          //   console.log('entry',entry);
          //  return <Accordian playList={entry}/>
          // })

          // Object.entries(playList).map(entry => {
          //   console.log('entry',entry);
          //   return <Accordian items={[entry]}/>
          // })