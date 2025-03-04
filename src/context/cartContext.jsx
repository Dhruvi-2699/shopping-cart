import { createContext, useContext, useState } from "react";
import { allProducts } from "../assets/utility";

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [allItems, setAllItems] = useState([]);

  const setItems = () => {
    setAllItems(allProducts);
  };
  const addToCart = (item) => {
    console.log("addToCart,", item);
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
  return (
    <CartContext.Provider value={{ allItems, setItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
//Custom Hook
export const useCart = () => {
  return useContext(CartContext);
};
