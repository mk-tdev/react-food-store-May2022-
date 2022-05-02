import "./App.css";
import React from "react";
import Cart from "./containers/Cart";
import Foods from "./containers/Foods";
import Header from "./containers/Header";

function App() {
  const [showCart, setShowCart] = React.useState(false);

  const toggleCartDisplay = () => {
    setShowCart(!showCart);
  };

  return (
    <div>
      <Header toggleCartDisplay={toggleCartDisplay} />

      <Foods />
      {showCart && <Cart onClose={toggleCartDisplay}/>}
    </div>
  );
}

export default App;
