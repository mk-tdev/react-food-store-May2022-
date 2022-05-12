import React, { useRef } from "react";
import Loader from "../components/Loader";

function Checkout(props) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const addressRef = useRef();

  const closeHandler = () => {
    props.onClose();
  };

  const confirmHandler = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const address = addressRef.current.value;

    props.onConfirmHandler({ name, email, phone, address });
  };

  return (
    <div className="px-2 py-2 my-5 mx-5">
      <h1 className="text-bold text-2xl">Checkout</h1>

      <form className="my-2" onSubmit={confirmHandler}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            ref={nameRef}
            required
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            ref={emailRef}
            type="email"
            required
            className="form-control"
            id="email"
            placeholder="Enter email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            ref={addressRef}
            required
            type="text"
            className="form-control"
            id="address"
            placeholder="Enter address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            ref={phoneRef}
            required
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter phone"
          />
        </div>

        <div className="flex justify-start gap-2 mt-3 items-center">
          {!props.loading && (
            <button
              type="submit"
              className="p-2 bg-cyan-800 text-white rounded"
            >
              Confirm
            </button>
          )}
          {props.loading && <Loader variant={"small"} />}
          <button
            type="button"
            className="p-2 bg-cyan-800 text-white rounded"
            onClick={closeHandler}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
