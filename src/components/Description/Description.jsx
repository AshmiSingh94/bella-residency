import React from "react";
import "./Description.scss";
const Description = () => {
  return (
    <div className="Description" id="aboutus">
      <div className="Description__container">
        <hr className="Description__container__hr" />
        <div className="Description__container__title">WHY CHOOSE US:</div>
        <div className="Description__container__body">
          Welcome to Bela Residency, where a nurturing mother of two runs the
          show. We provide a safe and comfortable accommodation with clean and
          hygienic rooms, nutritious meals, and parking facilities for bikes and
          scooters. Our location is serene, yet conveniently located close to
          the city center, making commuting a breeze. We prioritize the safety
          and well-being of our residents, along with their educational and
          personal growth. Our amenities includes
          <b>solar-heated water supply</b>, <b>laundry service</b>, space for
          gardening, and a swing, creating a <b>homely environment</b> that
          fosters relaxation and rejuvenation. Join us for a peaceful and
          welcoming space where you can focus on your studies or work, while
          also enjoying the comforts of home.
        </div>
      </div>
    </div>
  );
};

export default Description;
