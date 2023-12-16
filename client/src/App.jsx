import { useState } from "react";
import ImageInput from "./components/Image-input";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageInput />
    </div>
  );
}

export default App;

