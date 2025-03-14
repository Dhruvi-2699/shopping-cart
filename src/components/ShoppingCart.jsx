import React, { useContext, useEffect, useState } from "react";
import { ShoppingCartIcon, XIcon } from "lucide-react";
import { useCart } from "../context/cartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../assets/utility/formatCurrency";

const ShoppingCart = () => {
  const [isOpens, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const { allItems, handleLocalStorage } = useCart();

  useEffect(() => {
    const inCartItems = allItems.filter((item) => item.inCart == true);
    setCartItems(inCartItems?.length > 0 ? inCartItems : []);
    const price = inCartItems.reduce((accumulator, item) => {
      return (accumulator += item.price * item.quantity);
    }, 0);
    setTotalPrice(price);
    handleLocalStorage();
  }, [allItems]);

  return (
    <>
      {cartItems.length !== 0 && (
        <div
          className={`w-[300px] h-screen bg-gray-200 fixed top-0 z-30 border-l-4 border-red-200 rounded-tl-lg ${
            isOpens ? "right-0" : "-right-[300px]"
          }`}
        >
          <div className="w-full h-16 bg-white absolute left-0 top-0 z-10 grid place-items-center border border-white rounded-lg">
            <h1 className="text-xl text-gray-600">Shopping Cart</h1>
            <button
              onClick={() => setIsOpen(false)}
              className="w-9 h-9 bg-yellow-400 absolute right-3 z-20 grid place-items-center rounded-full hover:bg-yellow-500 transition-colors"
            >
              <XIcon className="text-white" />
            </button>
            <button
              onClick={() => setIsOpen(true)}
              className="w-9 h-9 bg-yellow-400 absolute -left-14 top-3 z-20 grid place-items-center border-2 border-gray-200 rounded-full"
            >
              <ShoppingCartIcon className="text-xs text-white" />
              <span className="w-6 h-6 bg-pink-400 absolute -bottom-4 -left-2 grid place-items-center border border-gray-300 rounded-full text-sm text-white">
                {cartItems.length > 9 ? "9+" : cartItems.length}
              </span>
            </button>
          </div>
          <div className="h-screen flex flex-col gap-y-3 overflow-y-scroll px-5 pb-24 pt-20">
            {cartItems?.map((item) => {
              return <CartItem key={item.id} item={item} fromCart={true} />;
            })}
          </div>
          <div className="w-full h-20 bg-white absolute bottom-0 left-0 z-10 grid place-items-center border border-white rounded-lg">
            <h1 className="text-xl text-gray-600">
              Total : {formatCurrency(totalPrice)}
            </h1>
            <button className="rounded-md bg-blue-300 px-2 text-white hover:bg-blue-100 transition-colors">
              Buy now
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ShoppingCart;
