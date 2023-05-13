import { useState } from "react";
import "./App.css";
export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const buttonBackgroundColor = disabled ? "gray" : color;
  return (
    <div>
      <button
        style={{ backgroundColor: buttonBackgroundColor }}
        onClick={() => {
          setColor((cur) => (cur === "red" ? "blue" : "red"));
        }}
        disabled={disabled}
      >
        {{ red: "Change to blue", blue: "Change to red" }[color]}
      </button>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        checked={disabled}
        onChange={(e) => setDisabled(e.target.checked)}
      ></input>
      <label htmlFor="disable-button-checkbox">Disable button</label>
      {/* input은 name을 사용하기 위해선 label이 필요 */}
    </div>
  );
}

export default App;
