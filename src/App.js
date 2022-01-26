import "./App.css";
import React from "react";
import useNumber from "./useNumber";

function App() {
  const { numberInWords, setNumber } = useNumber();

  return (
    <div className="App">
      <input
        type="number"
        name="number"
        id="number"
        placeholder="Please enter a number"
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></input>
      <div className="display">{numberInWords}</div>
    </div>
  );
}

export default App;
