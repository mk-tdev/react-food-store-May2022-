import React from "react";
import AddFood from "./AddFood";

function FoodCard({ name, description, price }) {
  return (
    <div className="shadow-md m-3 w-72 p-5 flex justify-between flex-col grow gap-2">
      <h1 className="text-1xl text-violet-900">{name}</h1>
      <h2>{description}</h2>
      <p className="text-amber-800">Price: $ {price}</p>
      <AddFood />
    </div>
  );
}

export default FoodCard;
