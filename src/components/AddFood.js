import React from "react";

export default function AddFood() {
  return (
    <form>
      <div className="flex justify-between gap-2 w-6/12">
        <input
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
