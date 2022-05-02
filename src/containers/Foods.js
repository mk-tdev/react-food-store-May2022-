import React from "react";
import FoodCard from "../components/FoodCard";
import { MOCK_FOOD_LIST } from "../data/foods";

function Foods() {
  return (
    <div className="mx-5 my-3">
      <h1 className="-mx-5 -my-3 p-3 text-2xl bg-cyan-600 text-white">
        List of Available Food!
      </h1>

      <div className="flex flex-wrap my-3 -mx-5">
        {MOCK_FOOD_LIST.map((food) => (
          <FoodCard
            key={food.id}
            name={food.name}
            description={food.description}
            price={food.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Foods;
