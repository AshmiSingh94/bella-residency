import React from "react";
import "./contacts.scss";
import Button from '@mui/material/Button';
const Contacts = () => {
    
  return (
    <div className="Contacts" id="contact">
    <iframe className="Contacts__map" title="Bella Residency" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.5124643294916!2d85.3425487!3d27.7014595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199c8c33b9a7%3A0xb470ec71f7b98208!2sParmeshworee%20Girls%20Hostel!5e0!3m2!1sen!2sin!4v1682318683682!5m2!1sen!2sin"
         allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="Contacts__hr"></div>
      <div className="Contacts__header">CONTACT US</div>
      <div className="Contacts__details">
        <div className="Contacts__details__number">
          <div className="Contacts__details__title">Contacts</div>
          <Button variant="contained" className="Contacts__details__button">Call Now</Button>
          <div>986-1444108</div>
          <div>984-1024217</div>
          <div>984-1560496</div>
        </div>
        <div className="Contacts__details__address">
          <div className="Contacts__details__title">Address</div>
          <Button variant="contained" className="Contacts__details__button">Get Directions</Button>
          <div>Old Baneshwor </div>
          <div>Kathmandu</div>
          <div>Nepal</div>
        </div>
        <div className="Contacts__details__hours">
          <div className="Contacts__details__title">Business Hours</div>
          <div>Mon: Open 24 hours </div>
          <div>Tue: Open 24 hours</div>
          <div>Wed: Open 24 hours</div>
          <div>Thu: Open 24 hours</div>
          <div>Fri: Open 24 hours</div>
          <div>Sat: Open 24 hours</div>
          <div>Sun: Open 24 hours</div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
