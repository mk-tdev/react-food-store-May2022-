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
      const index = state.items.findIndex((item) => item.id === action.payload);
      const existingItemVal = state.items[index];
      let updatedItems;

      if (existingItemVal) {
        if (+existingItemVal.amount === 1) {
          updatedItems = state.items.filter(
            (item) => item.id !== action.payload
          );
        } else {
          const updatedItem = {
            ...existingItemVal,
            amount: existingItemVal.amount - 1,
          };
          updatedItems = [
            ...state.items.slice(0, index),
            updatedItem,
            ...state.items.slice(index + 1),
          ];
        }

        return {
          ...state,
          items: updatedItems,
          totalAmount: state.totalAmount - existingItemVal.price,
        };
      }

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
      dispatchCartAction({ type: "ADD_ITEM", payload: item });
    },
    removeItem: (id) => {
      dispatchCartAction({ type: "REMOVE_ITEM", payload: id });
    },
    clearCart: () => {
      dispatchCartAction({ type: "CLEAR_CART" });
    },
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartProvider;
