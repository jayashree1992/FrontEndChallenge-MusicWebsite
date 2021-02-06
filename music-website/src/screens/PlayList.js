import React from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';
import Accordian from '../components/Accordian/Accordian';
import MainWrapper from '../components/MainWrapper/MainWrapper';
import EmptyResults from '../components/EmptyResults/EmptyResults';

const PlayList = () => {
  const playList = useSelector(state => state.PlayList.playLists);
  return (
    <MainWrapper>
      {!isEmpty(playList) ? (
        <div className="playlist-wrapper">
          {Object.keys(playList)
            .map(key => <Accordian playListName={key} albumIds={playList[key]} />)}
        </div>
      ) : (
        <EmptyResults mainwrapper={false} msg="Playlists yet!" btnMsg="Make your Playlist" />
      )}
    </MainWrapper>
  );
};

export default PlayList;
