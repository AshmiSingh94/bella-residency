import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Rating from "./components/Rating/Rating"
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro/>
      <Rating/>
    </div>
  );
};

export default App;
