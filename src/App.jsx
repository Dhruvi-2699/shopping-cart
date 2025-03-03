import React from "react";
import { allProducts } from "./assets/utility";
import CardItem from "./components/CardItem";

const App = () => {
  return (
    <div className="grid place-items-center py-10">
      <img
        src="/shoe-7.jpg"
        alt="Product Image"
        width={300}
        height={300}
        className="group-hover:-translate-y-2 transition-all duration-500"
      />
      <h1 className="text-4xl italic text-gray-500 mb-16">
        Trend Alert : Treading Outfit of the Season
      </h1>
      <div className="grid grid-cols-3 place-items-start gap-10">
        {allProducts?.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default App;
