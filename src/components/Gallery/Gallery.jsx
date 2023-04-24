import React from "react";
import "./Gallery.scss";
import MainLogo from "../../assests/images/bellaresidency.png";
import gallery1 from "../../assests/images/gallery1.jpeg";
import gallery2 from "../../assests/images/gallery2.jpeg";
import gallery3 from "../../assests/images/gallery3.jpeg";
import gallery4 from "../../assests/images/gallery4.jpg";
import gallery5 from "../../assests/images/gallery5.jpg";
import gallery6 from "../../assests/images/gallery6.jpg";
import gallery7 from "../../assests/images/gallery7.jpg";
import gallery8 from "../../assests/images/gallery8.jpg";
const Gallery = () => {
  return (
    <div className="Gallery" id="gallery">
      <div className="Gallery__item">
        <img src={gallery1} alt="" />
      </div>
      <div className="Gallery__item">
        <img src={gallery2} alt="" />
      </div>
      <div className="Gallery__item">
        <img src={gallery3} alt="" />
      </div>
      <div className="Gallery__item">
        <img src={gallery4} alt="" />
      </div>
      <div className="Gallery__item">
        <img src={gallery5} alt="" />
      </div>
      <div className="Gallery__item">
        <img src={gallery6} alt="" />
      </div>
      <div className="Gallery__item">
        <img src={gallery7} alt="" />
      </div>
      <div className="Gallery__item">
        <img src={gallery8} alt="" />
      </div>
      <div className="Gallery__item">
        <img src={MainLogo} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
