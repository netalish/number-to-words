import { useState, useEffect } from "react";
import number2words from "./Utils";

const useNumber = () => {
  const [number, setNumber] = useState("");
  const [numberInWords, setNumberInWords] = useState("");

  useEffect(() => {
    const words = number2words(number);
    setNumberInWords(words);
  }, [number]);

  return { numberInWords, setNumber };
};

export default useNumber;
