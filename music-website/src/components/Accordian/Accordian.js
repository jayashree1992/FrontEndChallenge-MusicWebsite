import React from "react";
import _ from "lodash";
import ListBox from "../../components/ListBox/ListBox";
import "./_accordian.scss";
import { useSelector } from "react-redux";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const Accordian = (props) => {
  const albumList = useSelector((state) => state.AlbumList.albums);
  const playListAlbums = _.filter(albumList, (o) =>
    props.albumIds.includes(o.id)
  );

  const playListDetails = (album) => {
    return <ListBox album={album} isPlayList={true} />;
  };
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading style={{ border: "0px!important" }}>
          <AccordionItemButton>{props.playListName}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordian-playlists">
          {playListAlbums.map((album) => {
            return playListDetails(album);
          })}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
