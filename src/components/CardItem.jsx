import React from "react";
import CardButtons from "./CardButtons";

const CardItem = ({ item }) => {
  const { id, name, imageUrl, price } = item;
  return (
    <div
      key={id}
      className="group relative flex flex-col gap-y-2 border border-zinc-200 rounded-md bg-white p-20"
    >
      <img
        src={imageUrl}
        alt="Product Image"
        width={300}
        height={300}
        className="group-hover:-translate-y-2 transition-all duration-500"
      />
      <div className="absolute bottom-5 left-5">
        <h1 className="text-zinc-700 text-sm">{name}</h1>
        <span className="text-pink-400 text-sm">${price}</span>
      </div>
      <CardButtons item={item} />
    </div>
  );
};

export default CardItem;
