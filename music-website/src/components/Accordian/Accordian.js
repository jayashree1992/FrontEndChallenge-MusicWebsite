import React from 'react';
import _ from 'lodash';
import './_accordian.scss';
import { useSelector, useDispatch } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import ListBox from '../ListBox/ListBox';
import { removePlayList } from '../../redux/playlist/action';

const Accordian = props => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.AlbumList.albums);
  const albumList = Object.values(list);
  const playListAlbums = _.filter(albumList, o => props.albumIds.includes(o.id)
  );
  const { playListName } = props;

  const playListDetails = album => (
    <ListBox album={album} isPlayList playListName={playListName} />
  );

  const deletePlaylist = () => {
    dispatch(removePlayList(playListName));
  };

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <button onClick={deletePlaylist} className="del-play-btn">
          <DeleteIcon />
        </button>
        <AccordionItemHeading className="aco-heading">
          <AccordionItemButton>{playListName}</AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <div className="accordian-playlists">
            {' '}
            {playListAlbums.map(album => playListDetails(album))}
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
