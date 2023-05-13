import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          setColor((cur) => (cur === "red" ? "blue" : "red"));
        }}
      >
        {{ red: "Change to blue", blue: "Change to red" }[color]}
      </button>
      <input type="checkbox"></input>
    </div>
  );
}

export default App;
