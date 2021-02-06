import React, { Fragment } from 'react';
import Navigation from '../Navigation/Navigation';
import '../../stylesheets/main.scss';
import 'react-multi-carousel/lib/styles.css';

const MainWrapper = props => (
  <>
    <div className="container-fluid main-wrapper">
      <div className="row">
        <div className="col-md-2 m-0 p-0">
          <Navigation />
        </div>
        <div className="col-md-10 m-0 p-0 content-box">{props.children}</div>
      </div>
    </div>
  </>
);

export default MainWrapper;
