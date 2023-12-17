import { useState } from "react";
import ImageInput from "./components/ImageInput";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticlesBackground from "./components/ParticlesBackground";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <ImageInput />
    </div>
  );
}

export default App;
