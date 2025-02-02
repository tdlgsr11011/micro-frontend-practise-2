import React from "react";

import SearchBar from "./SearchBar.jsx";
import ProductGrid from "../ProductGrid/ProductGrid.jsx";
import useRecipeStore from "../../zustand/recipeStore.js";

const Landing = () => {
  const { recipes } = useRecipeStore();

  return (
    <div>
      <SearchBar />
      <ProductGrid productItems={recipes} />
    </div>
  );
};

export default Landing;
