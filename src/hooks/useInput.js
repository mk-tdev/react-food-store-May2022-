import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(enteredValue);
  const hasError = !isValueValid && isTouched;

  const inputHandler = (e) => {
    setEnteredValue(e.target.value);
    setIsTouched(true);
  };

  const blurHandler = () => {
    setIsTouched(true);
  };

  const resetValues = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return [
    enteredValue,
    inputHandler,
    blurHandler,
    hasError,
    isValueValid,
    resetValues,
  ];
};

export default useInput;
