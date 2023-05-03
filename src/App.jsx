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
        <Button disableShadow>No Shadow</Button>
        <Button disabled>Disabled</Button>
        <Button variant="text" disabled>
          Disabled text variant
        </Button>
      </div>
      <footer>
        created by <span className="username">janetpaul00</span> -
        devChallenges.io
      </footer>
    </>
  );
}

export default App;
