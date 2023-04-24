import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Rating from "./components/Rating/Rating"
import Description from "./components/Description/Description"
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/contacts"
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Rating/>
      <Description/>
      <Gallery/>
      <Contacts/>
    </div>
  );
};

export default App;
