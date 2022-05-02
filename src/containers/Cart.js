import React from "react";
import Modal from "../components/Modal";

function Cart({ onClose }) {
  return (
    <Modal closeModal={onClose}>
      <div className="h-100 w-80 bg-white rounded pb-3 ">
        <h1 className="mb-3 bg-cyan-800 text-white px-2 py-3 ">Cart</h1>

        <div className="flex justify-between px-2 py-3">
          <span>Total Amount</span>
          <span>35.63</span>
        </div>

        <div className="flex justify-end gap-2 mt-3 mx-4">
          <button className="p-2 bg-cyan-800 text-white">Checkout</button>
          <button className="p-2 bg-cyan-800 text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
