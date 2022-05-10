import React from "react";

function SingleInput() {
  const [name, setName] = React.useState("");
  const [isNameTouched, setIsNameTouched] = React.useState(false);

  const nameValidity = name.trim() !== "";

  const nameInputHandler = (e) => {
    setName(e.target.value);
    setIsNameTouched(true);
  };

  const nameBlurHandler = () => {
    setIsNameTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setIsNameTouched(true);

    if (!nameValidity) {
      console.log("Form invalid");
      return;
    }
    setName("");
    setIsNameTouched(false);
  };

  return (
    <div className="m-5 p-5 border-1 shadow">
      <form onSubmit={formSubmitHandler}>
        <input
          className="border border-slate-600 p-3 outline-none "
          type="text"
          placeholder="Enter your name"
          value={name}
          onBlur={nameBlurHandler}
          onChange={nameInputHandler}
        />
        {!nameValidity && isNameTouched && (
          <p className="text-orange-800 py-2">Invalid input</p>
        )}

        <div className="my-2 flex justify-start">
          <button
            className="bg-slate-800 text-white px-3 py-2 rounded"
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
