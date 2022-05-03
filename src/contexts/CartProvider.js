import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingItemIndex];
      if (existingItem) {
        return {
          ...state,
          items: [
            ...state.items.slice(0, existingItemIndex),
            {
              ...existingItem,
              amount: +existingItem.amount + +action.payload.amount,
            },
            ...state.items.slice(existingItemIndex + 1),
          ],
          totalAmount: state.totalAmount + action.payload.price,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          totalAmount:
            state.totalAmount + action.payload.amount * action.payload.price,
        };
      }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case "CLEAR_CART":
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};

const initialState = { items: [], totalAmount: 0 };

function CartProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      // cartContext.items.push(item);
      // cartContext.totalAmount += item.price;

      dispatchCartAction({ type: "ADD_ITEM", payload: item });
    },
    removeItem: (id) => {
      const index = cartContext.items.findIndex((item) => item.id === id);
      cartContext.items.splice(index, 1);
      cartContext.totalAmount -= cartContext.items[index].price;
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
