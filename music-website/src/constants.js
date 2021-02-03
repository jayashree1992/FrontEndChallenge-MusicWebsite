import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import RadioRoundedIcon from "@material-ui/icons/RadioRounded";
import AlbumOutlinedIcon from "@material-ui/icons/AlbumOutlined";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";

export const navigationItems = [
  { name: "Home", icon: <HomeOutlinedIcon />, url: "/" },
  { name: "Album", icon: <AlbumOutlinedIcon />, url: "/album" },
  { name: "Genre", icon: <RadioRoundedIcon />, url: "/genre" },
  { name: "Playlist", icon: <LibraryMusicIcon />, url: "/playlist" },
];

export const ALBUM_LOAD_LIMIT = 12;

export const responsiveCarousel = {
  desktop: {
    breakpoint: { max: 3000, min: 1200 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};
