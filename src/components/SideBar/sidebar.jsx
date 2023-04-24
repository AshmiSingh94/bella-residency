import React from "react";
import "./sidebar.scss";

const Sidebar = (props) => {
  return (
    <div className={`sidebar${props.isOpen ? " open" : ""}`}>
      <div className="sidebar__list">
        <a href="#testimonials">Testimonials</a>
        <a href="#aboutus">About Us</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  );
};

export default Sidebar;
