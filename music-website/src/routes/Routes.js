import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from "../screens/Home";
import Album from "../screens/Album";
import Genre from "../screens/Genre";

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/album" component={Album} />
    <Route path="/genre" component={Genre} />
  </Switch>
);

export default Routes;