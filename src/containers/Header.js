import React from "react";
// import foodBanner from "../assets/images/food-banner.jpg";
// import cartIcon from "../assets/images/cart.png";

function Header({ toggleCartDisplay }) {
  return (
    <div>
      <header className="flex justify-between shadow-lg p-2 items-center">
        <h1 className="">Food Store</h1>
        <button
          className="bg-gray-800 text-white rounded px-3 py-2"
          onClick={toggleCartDisplay}
        >
          Cart
        </button>
      </header>

      {/* <div className="relative">
        <img className="" src={foodBanner} alt="banner" />

        <section>
          <div className="absolute top-0 left-0 w-full h-full ">
            <h2 className="text-dark text-center mt-10 p-5 text-4xl text-orange-600">
              Welcome to Food Store{" "}
            </h2>
            <h3 className="text-dark text-center text-2xl text-orange-500">
              It's the food you love, delivered
            </h3>
          </div>
        </section>
      </div> */}
    </div>
  );
}

export default Header;