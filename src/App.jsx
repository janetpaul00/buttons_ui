import { useState } from "react";
import Button from "./Button";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Buttons</h1>
      <p>Try hovering!</p>
      <div className="grid">
        <Button> Default </Button>
        <Button variant="outline"> Outline </Button>
        <Button variant="text">Text</Button>
        <Button disabled>Disabled</Button>
      </div>
    </>
  );
}

export default App;
