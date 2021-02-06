import React from "react";
import _ from "lodash";
import ListBox from "../../components/ListBox/ListBox";
import "./_accordian.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import { useSelector, useDispatch } from "react-redux";
import { removePlayList } from "../../redux/playlist/action";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Accordian = (props) => {
  const dispatch = useDispatch();
  const albumList = useSelector((state) => state.AlbumList.albums);
  const playListAlbums = _.filter(albumList, (o) =>
    props.albumIds.includes(o.id)
  );
  const playListName = props.playListName;

  const playListDetails = (album) => {
    return (
      <ListBox album={album} isPlayList={true} playListName={playListName} />
    );
  };

  const deletePlaylist = () => {
    dispatch(removePlayList(playListName));
  };

  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <button onClick={deletePlaylist} className="del-play-btn">
          {`Delete Playlist`}
        </button>
        <AccordionItemHeading className="aco-heading">
          <AccordionItemButton>{playListName}</AccordionItemButton>
        </AccordionItemHeading>

        <AccordionItemPanel>
          <div className="accordian-playlists">
            {" "}
            {playListAlbums.map((album) => {
              return playListDetails(album);
            })}
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
