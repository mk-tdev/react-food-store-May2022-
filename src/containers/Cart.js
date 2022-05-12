import React, { useState } from "react";
import Modal from "../components/Modal";
import Checkout from "./Checkout";
import CartContext from "../contexts/cart-context";
import { postOrdersUrl } from "../misc";

function Cart({ onClose }) {
  const cartCtx = React.useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(false);
  const totalAmount = cartCtx.totalAmount;
  const cartItems = cartCtx.items;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (e, id) => {
    e.stopPropagation();
    cartCtx.removeItem(id);
  };

  const carItemAddHandler = (e, item) => {
    e.stopPropagation();
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const checkoutHandler = () => {
    setShowCheckout(true);
  };

  const onConfirmHandler = async (data) => {
    console.log(data);
    setLoading(true);
    const response = await fetch(postOrdersUrl, {
      method: "POST",
      body: JSON.stringify({
        user: data,
        order: cartItems,
      }),
    });

    if (!response.ok) {
      // throw new Error("Something went wrong!");
    }
    setLoading(false);
    cartCtx.clearCart();
    // setShowCheckout(false);
    onClose();
  };

  return (
    <Modal closeModal={onClose}>
      <div className="h-100 modal-width bg-white rounded pb-3 md:modal-width overflow-scroll">
        <h1 className="mb-3 bg-cyan-800 text-white px-2 py-3 ">Cart</h1>

        {cartItems.map((item) => (
          <div className="flex justify-between mb-3 px-2 py-2" key={item.id}>
            <div className=" ">
              <h1 className="text-1xl text-violet-900">{item.name}</h1>
              <p className="text-gray-600">
                Price: ${item.price.toFixed(2)}{" "}
                <span className="border px-1">x {item.amount}</span>
              </p>
            </div>

            <div className="flex flex-row items-center gap-2">
              <button
                className="bg-green-600 text-white rounded px-2 py-1"
                onClick={(e) => carItemAddHandler(e, item)}
              >
                +
              </button>
              <button
                className="bg-red-600 text-white rounded px-2 py-1"
                onClick={(e) => cartItemRemoveHandler(e, item.id)}
              >
                -
              </button>
            </div>
          </div>
        ))}

        <div className="flex justify-between px-2 py-3">
          <span>Total Amount</span>
          <span className="font-semibold">$ {totalAmount.toFixed(2)}</span>
        </div>

        {showCheckout && (
          <Checkout loading={loading} onClose={onClose} onConfirmHandler={onConfirmHandler} />
        )}
        {!showCheckout && (
          <div className="flex justify-end gap-2 mt-3 mx-4">
            {hasItems && (
              <button
                className="p-2 bg-cyan-800 text-white"
                onClick={checkoutHandler}
              >
                Checkout
              </button>
            )}
            <button className="p-2 bg-cyan-800 text-white" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
