import React, { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";
import Loader from "../components/Loader";
import { getFoodListUrl } from "../misc";
// import { MOCK_FOOD_LIST } from "../data/foods";

function Foods() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    const fetchFoods = async () => {
      setLoading(true);
      const response = await fetch(getFoodListUrl);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const foodList = [];
      for (const key in data) {
        foodList.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }

      setFoods(foodList);
      setLoading(false);
    };

    fetchFoods().catch((err) => {
      setHasError(err.message);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mx-5 my-3">
      <h1 className="-mx-5 -my-3 p-3 text-2xl bg-cyan-600 text-white">
        List of Available Food!
      </h1>

      {loading && (
        <div className="text-center my-3">
          <Loader />
        </div>
      )}

      {hasError && (
        <div className="text-center my-3">
          <h1 className="text-red-600">{hasError}</h1>
        </div>
      )}

      {!loading && !hasError && (
        <div className="flex flex-wrap my-3 -mx-5">
          {foods.map((food) => (
            <FoodCard
              id={food.id}
              key={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Foods;
