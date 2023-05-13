import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [checked, setChecked] = useState(false);
  console.log(checked);
  return (
    <div>
      <button
        style={{ backgroundColor: color }}
        onClick={() => {
          setColor((cur) => (cur === "red" ? "blue" : "red"));
        }}
        disabled={checked}
      >
        {{ red: "Change to blue", blue: "Change to red" }[color]}
      </button>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      ></input>
    </div>
  );
}

export default App;
