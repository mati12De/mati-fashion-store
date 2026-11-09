"use client";

import { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext(null);

const STORAGE_KEY = "mati-cart-v1";

const initialState = {
  items: [],
  hasHydrated: false,
};

function cartReducer(state, action) {
  switch (action.type) {
    case "HYDRATE":
      return {
        ...state,
        items: action.payload,
        hasHydrated: true,
      };

    case "ADD_ITEM": {
      const { product, size } = action.payload;

      const existingItem = state.items.find(
        (item) => item.product.id === product.id && item.size === size,
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.product.id === product.id && item.size === size
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { product, size, quantity: 1 }],
      };
    }

    case "UPDATE_QUANTITY": {
      const { productId, size, quantity } = action.payload;

      return {
        ...state,
        items: state.items.map((item) =>
          item.product.id === productId && item.size === size
            ? { ...item, quantity: Math.max(1, quantity) }
            : item,
        ),
      };
    }

    case "REMOVE_ITEM": {
      const { productId, size } = action.payload;

      return {
        ...state,
        items: state.items.filter(
          (item) => !(item.product.id === productId && item.size === size),
        ),
      };
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Restore the cart after the component mounts.
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(STORAGE_KEY);

      if (!savedCart) {
        dispatch({ type: "HYDRATE", payload: [] });
        return;
      }

      const parsedCart = JSON.parse(savedCart);

      const validItems = Array.isArray(parsedCart)
        ? parsedCart.filter(
            (item) =>
              item &&
              item.product &&
              item.product.id != null &&
              typeof item.size === "string" &&
              Number.isInteger(item.quantity) &&
              item.quantity > 0,
          )
        : [];

      dispatch({
        type: "HYDRATE",
        payload: validItems,
      });
    } catch (error) {
      console.error("Unable to restore MATI cart:", error);

      dispatch({
        type: "HYDRATE",
        payload: [],
      });
    }
  }, []);

  // Save changes only after the initial restoration.
  useEffect(() => {
    if (!state.hasHydrated) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch (error) {
      console.error("Unable to save MATI cart:", error);
    }
  }, [state.items, state.hasHydrated]);

  function addToCart(product, size) {
    dispatch({
      type: "ADD_ITEM",
      payload: { product, size },
    });
  }

  function updateQuantity(productId, size, quantity) {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { productId, size, quantity },
    });
  }

  function removeFromCart(productId, size) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { productId, size },
    });
  }

  const cartCount = state.items.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  const subtotal = state.items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        cartCount,
        subtotal,
        addToCart,
        updateQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside a CartProvider");
  }

  return context;
}
