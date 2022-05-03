import React from "react";
import CartContext from "../contexts/cart-context";
import AddFood from "./AddFood";

function FoodCard({ id, name, description, price }) {
  const cartCtx = React.useContext(CartContext);

  const addToCartHandler = (amt) => {
    cartCtx.addItem({ id, name, description, price: +price, amount: amt });
  };

  return (
    <div className="shadow-md m-3 w-72 p-5 flex justify-between flex-col grow gap-2">
      <h1 className="text-1xl text-violet-900">{name}</h1>
      <h2>{description}</h2>
      <p className="text-amber-800">Price: $ {price.toFixed(2)}</p>
      <AddFood addToCart={addToCartHandler} />
    </div>
  );
}

export default FoodCard;
