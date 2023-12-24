import Container from "./components/Container";
import "./App.css";
import Loader from "./components/Loader";
import gsap from "gsap";

function App() {
  return (
    <div className="App">
      <Loader />
      <Container />
    </div>
  );
}

export default App;
