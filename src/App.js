import "./App.css";
import React from "react";
import Cart from "./containers/Cart";
import Foods from "./containers/Foods";
import Header from "./containers/Header";
import CartProvider from "./contexts/CartProvider";
// import FormContainer from "./playground/form-container";

function App() {
  const [showCart, setShowCart] = React.useState(false);

  const toggleCartDisplay = () => {
    setShowCart(!showCart);
  };

  return (
    <CartProvider>
      <Header toggleCartDisplay={toggleCartDisplay} />

      {/* <FormContainer /> */}

      <Foods />
      {showCart && <Cart onClose={toggleCartDisplay} />}
    </CartProvider>
  );
}

export default App;
