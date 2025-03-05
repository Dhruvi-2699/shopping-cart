import React, { useEffect } from "react";
import CartItem from "./components/CartItem";
import { useCart } from "./context/cartContext";
import ShoppingCart from "./components/ShoppingCart";

const App = () => {
  const { allItems, setItems } = useCart();
  useEffect(() => {
    setItems();
  }, []);
  useEffect(() => {
    console.log(allItems);
  }, [allItems]);
  return (
    <div className="grid text-center">
      <h1 className="text-4xl italic text-gray-500 my-8">
        Trend Alert : Treading Outfit of the Season
      </h1>
      <ShoppingCart />
      <div className="grid md:grid-cols-3 place-items-start gap-10 m-4">
        {allItems?.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
