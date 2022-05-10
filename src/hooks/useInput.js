import { useState, useReducer } from "react";

const inputStateReducer = (state, action) => {
  switch (action.type) {
    case "INPUT_CHANGE":
      return {
        ...state,
        value: action.payload,
        isTouched: true,
      };
    case "INPUT_BLUR":
      return {
        ...state,
        isTouched: true,
      };
    case "INPUT_RESET":
      return {
        ...state,
        value: "",
        isTouched: false,
      };
    default:
      return state;
  }
};

const initialInputState = {
  value: "",
  isTouched: false,
};

const useInput = (validateValue) => {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);
  const [inputState, inputDispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  // const isValueValid = validateValue(enteredValue);
  const isValueValid = validateValue(inputState.value);
  // const hasError = !isValueValid && isTouched;
  const hasError = !isValueValid && inputState.isTouched;

  const inputHandler = (e) => {
    // setEnteredValue(e.target.value);
    // setIsTouched(true);
    inputDispatch({ type: "INPUT_CHANGE", payload: e.target.value });
  };

  const blurHandler = () => {
    // setIsTouched(true);
    inputDispatch({ type: "INPUT_BLUR" });
  };

  const resetValues = () => {
    // setEnteredValue("");
    // setIsTouched(false);
    inputDispatch({ type: "INPUT_RESET" });
  };

  return [
    // enteredValue,
    inputState.value,
    inputHandler,
    blurHandler,
    hasError,
    isValueValid,
    resetValues,
  ];
};

export default useInput;
