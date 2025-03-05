import React, { useEffect } from "react";
import CartItem from "./components/CartItem";
import { useCart } from "./context/cartContext";
import ShoppingCart from "./components/ShoppingCart";
import {
  getItemFromStorage,
  getParsedItemFromStorage,
} from "./assets/utility/localStorageFns";

const App = () => {
  const { allItems, setItems, handleCartItemFromStorage } = useCart();
  useEffect(() => {
    setItems();
    if (
      getParsedItemFromStorage("cartItems")?.length !== 0 &&
      getItemFromStorage("cartItems") !== null
    ) {
      handleCartItemFromStorage();
    }
  }, []);
  return (
    <div className="grid place-items-center py-20">
      <h1 className="lg:text-4xl md:text-3xl text-2xl italic text-gray-500 text-center p-5">
        Trend Alert : Treading Outfit of the Season
      </h1>
      <ShoppingCart />
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 place-items-start gap-10 xl:px-6 px-10">
        {allItems?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
