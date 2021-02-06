import React from 'react';
import { NavLink } from 'react-router-dom';
import { formatGenre } from '../../utils/helpers';
import './_coloredblock.scss';

const ColoredBlock = props => (
  <>
    {props.categories.length > 0 && (
    <div>
      <div className="d-flex mr-2 custom-col">
        <NavLink
          to={`/genre/${formatGenre(props.categories[0])}`}
          className="col-4 m-1 inner color-hue1"
        >
          {props.categories[0]}
        </NavLink>

        <NavLink
          to={`/genre/${formatGenre(props.categories[1])}`}
          className="col-8 m-1 inner color-hue2"
        >
          {props.categories[1]}
        </NavLink>
      </div>

      <div className="d-flex mr-2 custom-col">
        <NavLink
          to={`/genre/${formatGenre(props.categories[2])}`}
          className="col-6 m-1 inner color-hue3"
        >
          {props.categories[2]}
        </NavLink>
        <NavLink
          to={`/genre/${formatGenre(props.categories[3])}`}
          className="col-6 m-1 inner color-hue4"
        >
          {props.categories[3]}
        </NavLink>
      </div>

      <div className="d-flex mr-2 custom-col">
        <NavLink
          to={`/genre/${formatGenre(props.categories[4])}`}
          className="col-4 m-1 inner color-hue5"
        >
          {props.categories[4]}
        </NavLink>
        <NavLink
          to={`/genre/${formatGenre(props.categories[5])}`}
          className="col-8 m-1 inner color-hue6"
        >
          {props.categories[5]}
        </NavLink>
      </div>
    </div>
    )}
  </>
);

export default ColoredBlock;
