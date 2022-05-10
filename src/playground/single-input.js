import React, { useEffect, useState } from "react";
import useInput from "../hooks/useInput";

function SingleInput() {
  const validator = (value) => value.trim() !== "";
  const [
    enteredValue,
    inputHandler,
    blurHandler,
    hasError,
    isValueValid,
    resetValues,
  ] = useInput(validator);
  const [formValidity, setFormValidity] = useState(false);

  useEffect(() => {
    setFormValidity(isValueValid);
  }, [isValueValid]);

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (!isValueValid) {
      console.log("Form invalid");
      return;
    }
    resetValues();
  };

  return (
    <div className="m-5 p-5 border-1 shadow">
      <form onSubmit={formSubmitHandler}>
        <input
          className="border border-slate-600 p-3 outline-none "
          type="text"
          placeholder="Enter your name"
          value={enteredValue}
          onBlur={blurHandler}
          onChange={inputHandler}
        />
        {hasError && <p className="text-orange-800 py-2">Invalid input</p>}

        <div className="my-2 flex justify-start">
          <button
            disabled={!formValidity}
            className="bg-slate-800 text-white px-3 py-2 rounded disabled:opacity-50"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default SingleInput;
