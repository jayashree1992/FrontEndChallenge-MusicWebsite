import React from 'react';
import { NavLink } from 'react-router-dom';
import MainWrapper from '../MainWrapper/MainWrapper';
import './_emptyresults.scss';

const EmptyResults = props => props.mainwrapper ? (
  <MainWrapper>
    <div className="playlist-msg">
      Whoops! <br />
      There are no {props.msg}
    </div>
    <div className="col text-center empty-btn">
      <NavLink to="/album" className="load-more">
        {props.btnMsg}
      </NavLink>
    </div>
  </MainWrapper>
) : (
  <div>
    <div className="playlist-msg">
      Whoops! <br />
      There are no {props.msg}
    </div>
    <div className="col text-center empty-btn">
      <NavLink to="/album" className="load-more">
        {props.btnMsg}
      </NavLink>
    </div>
  </div>
);
export default EmptyResults;
