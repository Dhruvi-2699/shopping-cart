import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets/utility";
import {
  getItemFromStorage,
  getParsedItemFromStorage,
  setItemInStorage,
} from "../assets/utility/localStorageFns";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([]);

  const setItems = () => {
    setAllItems(allProducts);
  };

  const addToCart = (item) => {
    setAllItems((prevItems) => {
      return prevItems.map((prevItem) => {
        if (prevItem.inCart) {
          return prevItem;
        }
        return prevItem.id === item.id
          ? { ...prevItem, inCart: true }
          : prevItem;
      });
    });
  };
  const removeFromCart = (item) => {
    setAllItems((prevItems) => {
      return prevItems.map((prevItem) => {
        return prevItem.id === item.id
          ? { ...prevItem, inCart: false, quantity: 1 }
          : prevItem;
      });
    });
  };
  const updateQuantiy = (cartItem, count) => {
    setAllItems((prevItem) => {
      return prevItem.map((item) => {
        return item.id == cartItem.id
          ? { ...item, quantity: item.quantity + count }
          : item;
      });
    });
  };
  const handleLocalStorage = () => {
    if (allItems.length !== 0) {
      const inCartItems = allItems.filter((item) => item.inCart);
      setItemInStorage("cartItems", inCartItems);
    }
  };
  const handleCartItemFromStorage = () => {
    if (getItemFromStorage("cartItems") !== null) {
      const storageItems = getParsedItemFromStorage("cartItems");
      setAllItems((prevItems) => {
        return prevItems.map((item) => {
          const matchedItem = storageItems.find(
            (storageItem) => storageItem.id == item.id
          );
          return matchedItem ? matchedItem : item;
        });
      });
    }
  };
  return (
    <CartContext.Provider
      value={{
        allItems,
        setItems,
        addToCart,
        removeFromCart,
        updateQuantiy,
        handleLocalStorage,
        handleCartItemFromStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
//Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};
