import React from "react";

import SearchBar from "./SearchBar.jsx";
import useRecipeStore from "../../zustand/recipeStore.js";

const Landing = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default Landing;
