import React, { useState } from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Rating from "./components/Rating/Rating";
import Description from "./components/Description/Description";
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/contacts";
import Form from "./components/Form/form";
import axios from "axios";

const App = () => {
  const [isOpen, setIsopen] = useState(false);

  const handleFormOpen = () => {
    setIsopen(true);
  };
  const handleFormClose = () => {
    setIsopen(false);
  };

  const getQuote = (user) => {
    handleFormClose();
    const data = {
      ...user,
      date: new Date(),
    };

    axios
      .post(
        "https://script.google.com/macros/s/AKfycbxlNHYpCaLc3mGAte4G4eMl-KwtdKOnGB4dYvVZlNUVb9hYwpE1Ym-TUC5pzBLjyhoPZQ/exec",
        data
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="App">
      <Navbar handleFormOpen={handleFormOpen} />
      <Intro handleFormOpen={handleFormOpen} />
      <Rating />
      <Description />
      <Gallery />
      <Contacts />
      {isOpen ? <Form handleClose={handleFormClose} getQuote={getQuote} /> : ""}
    </div>
  );
};

export default App;
