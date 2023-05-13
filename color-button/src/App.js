import { useState } from "react";
import "./App.css";
export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [color, setColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);

  const buttonBackgroundColor = disabled ? "gray" : color;
  const nextColor =
    color === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";

  return (
    <div>
      <button
        style={{ backgroundColor: buttonBackgroundColor }}
        onClick={() => {
          setColor(nextColor);
        }}
        disabled={disabled}
      >
        {`Change to ${replaceCamelWithSpaces(nextColor)}`}
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
