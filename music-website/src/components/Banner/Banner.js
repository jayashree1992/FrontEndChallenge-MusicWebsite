import React from 'react';
import banner from '../../assets/banner.jpg';
import './_banner.scss';

const Banner = () => (
  <div>
    <img src={banner} className="w-100" alt="banner" />
    <div className="banner-txt">
      Enjoy<span className="top-100-txt"> Top 100</span> <br />
      Record Breaking Albums...
    </div>
  </div>
);

export default Banner;
