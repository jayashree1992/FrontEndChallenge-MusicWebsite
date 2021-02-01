import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import RadioRoundedIcon from "@material-ui/icons/RadioRounded";
import AlbumOutlinedIcon from "@material-ui/icons/AlbumOutlined";

export const navigationItems = [
  { name: "Home", icon: <HomeOutlinedIcon />, url: "/" },
  { name: "Album", icon: <AlbumOutlinedIcon />, url: "/album" },
  { name: "Genre", icon: <RadioRoundedIcon />, url: "/genre" },
];

export const ALBUM_LOAD_LIMIT = 12;
