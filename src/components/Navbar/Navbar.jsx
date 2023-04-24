import React from "react";
import "./Navbar.scss";
import ReorderIcon from "@mui/icons-material/Reorder";
import CloseIcon from "@mui/icons-material/Close";
import CallIcon from "@mui/icons-material/Call";
import DirectionsIcon from "@mui/icons-material/Directions";
import EmailIcon from "@mui/icons-material/Email";
import { pink } from "@mui/material/colors";
import Sidebar from "../SideBar/sidebar";
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="Navbar">
      <div className="Navbar__left">
        {!isOpen ? (
          <ReorderIcon
            sx={{ color: pink[500] }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        ) : (
          <CloseIcon
            sx={{ color: pink[500] }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}

        <span>BELA RESIDENCY</span>
      </div>
      <div className="Navbar__right">
        <div className="Navbar__right__items">
          <EmailIcon sx={{ color: pink[500] }} />
          <span className="Navbar__right__name">Contact Us</span>
        </div>
        <div className="Navbar__right__items">
          <CallIcon sx={{ color: pink[500] }} />
          <span className="Navbar__right__name">Call Now</span>
        </div>
        <div className="Navbar__right__items">
          <DirectionsIcon sx={{ color: pink[500] }} />
          <span className="Navbar__right__name">Get Directions</span>
        </div>
      </div>
      <Sidebar isOpen={isOpen} />
    </div>
  );
};

export default Navbar;
