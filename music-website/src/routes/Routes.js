import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from '../screens/Home';
import Album from '../screens/Album';
import Genre from '../screens/Genre';
import GenreAlbum from '../screens/GenreAlbum';
import AlbumDetails from '../screens/AlbumDetails';
import PlayList from '../screens/PlayList';
import SearchResults from '../screens/SearchResults';
import Favorite from '../screens/Favorite';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/album" component={Album} exact />
    <Route path="/favorite" component={Favorite} exact />
    <Route path="/genre" component={Genre} exact />
    <Route path="/genre/:genre" component={GenreAlbum} exact />
    <Route path="/playlist" component={PlayList} exact />
    <Route path="/album/:id" component={AlbumDetails} exact />
    <Route path="/search" component={SearchResults} exact />
    <Redirect to="/" /> {/* This will prevent user from getting 404 and any non existing url will be redirected to home page */}
  </Switch>
);

export default Routes;
