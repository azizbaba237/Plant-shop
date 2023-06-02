import React from "react";

function Categories({ setActiveCategory, categories, activeCategory }) {
  return (
    <div className="text-center p-6 ">
      <select
        value={activeCategory}
        onChange={(e) => setActiveCategory(e.target.value)}
        className="ring-1 ring-black mx-3"
      >
        <option value="">---</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button onClick={() => setActiveCategory("")}>Reinitialiser</button>
    </div>
  );
}

export default Categories;