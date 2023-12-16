import { useState } from "react";
import ImageInput from "./components/Image-input";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <ImageInput />
    </div>
  );
}

export default App;
