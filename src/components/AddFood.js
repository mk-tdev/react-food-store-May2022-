import React, { useRef } from "react";

export default function AddFood({ addToCart }) {
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const amount = amountInputRef.current.value;
    addToCart(amount);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex justify-between gap-2 w-6/12">
        <input
          ref={amountInputRef}
          type="number"
          min={1}
          max={5}
          step={1}
          defaultValue={1}
          id="name"
          placeholder=""
          className="grow border-2 border-gray-600 rounded p-2"
        />
        <button className="text-white bg-cyan-600 rounded px-5 py-2">
          Add
        </button>
      </div>
    </form>
  );
}
