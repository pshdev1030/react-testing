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
        id="disable-button-checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      ></input>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      {/* input은 name을 사용하기 위해선 label이 필요 */}
    </div>
  );
}

export default App;
