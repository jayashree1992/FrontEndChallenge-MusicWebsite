import React from "react";
import _ from "lodash";
import DeleteIcon from "@material-ui/icons/Delete";
import "react-accessible-accordion/dist/fancy-example.css";
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

  const playListDetails = (image, namePlusArtist) => {
    return (
      <div class="d-flex flex-row justify-content-between">
        <div class="p-2">
          <span>
            <img src={image} alt="" className="img-round"/>
          </span>
          <span class="ml-4">{namePlusArtist}</span>
        </div>
        <div class="p-3 mt-1">
          <DeleteIcon />
        </div>
      </div>
    );
  };
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>{props.playListName}</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel className="accordian-playlists">
          {playListAlbums.map((albums) => {
            return playListDetails(albums.image_55, albums.namePlusArtist);
          })}
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian;
