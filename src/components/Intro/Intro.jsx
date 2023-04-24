import React from "react";
import "./Intro.scss";
import images from "../../assests/images/bellaresidency.png";
const Intro = () => {
  return (
    <div className="intro">
      <div className="intro__body">
        <div className="intro__body__title">BELA RESIDENCY</div>
        <div className="intro__body__description">
          Quality, Affordable Girls Hostel in Kathmandu.
        </div>
        <div className="intro__body__description">Open 24 hours</div>
        <div className="intro__body__button">
          <button className="intro__body__button__custom">Contact Us</button>
        </div>
      </div>
      <img src={images} alt="" className="intro__image" />
    </div>
  );
};

export default Intro;
