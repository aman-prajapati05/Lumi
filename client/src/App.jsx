import { useState } from "react";
import ImageInput from "./components/Image-input";
import "./index.css";
import Navbar from './components/Navbar.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hero/>
    </>
  )
}

export default App
