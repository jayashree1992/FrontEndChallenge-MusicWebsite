import React, { Fragment } from "react";
import Navigation from "../../components/Navigation/Navigation";
import "../../stylesheets/main.scss";
import "react-multi-carousel/lib/styles.css";

const MainWrapper = (props) => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 m-0 p-0">
            <Navigation />
          </div>
          <div className="col-md-10 m-0 p-0 content-box">
           {props.content}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MainWrapper;