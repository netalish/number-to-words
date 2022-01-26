import "./App.css";
import React, { useEffect, useState } from "react";
import number2words from "./Utils";

function App() {
  const [number, setNumber] = useState("");
  const [numberInWords, setNumberInWords] = useState("");

  useEffect(() => {
    const words = number2words(number);
    setNumberInWords(words);
  }, [number]);
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
