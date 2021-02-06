import React from 'react';
import { NavLink } from 'react-router-dom';
import { MDBRow } from 'mdbreact';
import { formatGenre } from '../../utils/helpers';
import './_masonary.scss';

const Masonary = props => (
  <div className="masonary-wrapper">
    <MDBRow className="masonry-with-columns-2">
      {props.categories.map(category => <NavLink to={`/genre/${formatGenre(category)}`} className="cat">{category}</NavLink>)}
    </MDBRow>
  </div>
);

export default Masonary;
