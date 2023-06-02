import React, { useState } from "react";
import { plantList } from "../data/plantList";
import PlantItem from "./PlantItem";
import Categories from "./Categories";

function ShoppinList({ cart, setCart }) {
  const [activeCategory, setActiveCategory] = useState("");
  const categories = plantList.reduce(
    (acc, plant) =>
      acc.includes(plant.category) ? acc : acc.concat(plant.category),
    []
  );

  function addToCart(name, price) {
    const currentPlantSaved = cart.find((plant) => plant.name === name);
    if (currentPlantSaved) {
      const cartFilterCurrentPlant = cart.filter(
        (plant) => plant.name !== name
      );
      setCart([
        ...cartFilterCurrentPlant,
        { name, price, amount: currentPlantSaved.amount + 1 },
      ]);
    } else {
      setCart([...cart, { name, price, amount: 1 }]);
    }
  }

  return (
    <div className="w-[100%]">
      <Categories
        categories={categories}
        setActiveCategory={setActiveCategory}
        activeCategory={activeCategory}
      />

      <ul className="flex justify-center flex-wrap">
        {plantList.map(({ id, cover, name, water, light, price, category }) =>
          !activeCategory || activeCategory === category ? (
            <div key={id}>
              <PlantItem
                cover={cover}
                name={name}
                water={water}
                light={light}
                price={price}
              />
              <button
                onClick={() => addToCart(name, price)}
                className="bg-slate-200 px-1.5 rounded mb-2 ml-3"
              >
                Ajouter
              </button>
            </div>
          ) : null
        )}
      </ul>
    </div>
  );
}

export default ShoppinList;
