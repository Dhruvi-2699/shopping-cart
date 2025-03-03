import React from "react";

const CardItem = ({ item }) => {
  const { id, name, imgUrl, price } = item;
  console.log("check url-", item);

  return (
    <div className="group relative flex flex-col gap-y-2 border border-zinc-200 rounded-md bg-white p-24">
      <img
        src="/images/shoe-7.jpg"
        alt="Product Image"
        width={300}
        height={300}
        className="group-hover:-translate-y-2 transition-all duration-500"
      />
      <div className="absolute bottom-5 left-5"></div>
    </div>
  );
};

export default CardItem;
