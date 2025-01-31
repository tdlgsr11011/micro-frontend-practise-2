import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import useRecipeStore from "../../zustand/recipeStore";
import useDebounce from "../../hooks/useDebounce";

const SearchBar = () => {
  const { fetchRecipes } = useRecipeStore();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery.length) {
      fetchRecipes(debouncedQuery);
    }
  }, [debouncedQuery]);

  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className={styles.searchbarContainer}>
      <input
        type="text"
        className={styles.searchbar}
        placeholder="srarch a recipe eg. pizza"
        onChange={queryChangeHandler}
        value={query}
      />
    </div>
  );
};

export default SearchBar;
