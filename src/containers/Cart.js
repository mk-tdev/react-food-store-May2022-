import React from "react";
import Modal from "../components/Modal";
import CartContext from "../contexts/cart-context";

function Cart({ onClose }) {
  const cartCtx = React.useContext(CartContext);
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

  return (
    <Modal closeModal={onClose}>
      <div className="h-100  bg-white rounded pb-3 w-96  overflow-scroll">
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

        <div className="flex justify-end gap-2 mt-3 mx-4">
          {hasItems && (
            <button className="p-2 bg-cyan-800 text-white">Checkout</button>
          )}
          <button className="p-2 bg-cyan-800 text-white" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default Cart;
