import { useState } from "react";
import ImageInput from "./components/ImageInput";
import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ParticlesBackground from "./components/ParticlesBackground";


function App() {
  

  return (
    <div className="App">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <ImageInput id='element'/>
      {/* <br />
      <br />
      <br />
      <br />
      <br /> */}
    </div>
  );
}

export default App;
