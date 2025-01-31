import React from "react";
import styles from "./SearchBar.module.scss";

const SearchBar = () => {
  return (
    <div className={styles.searchbarContainer}>
      <input
        type="text"
        className={styles.searchbar}
        placeholder="srarch a recipe eg. pizza"
      />
    </div>
  );
};

export default SearchBar;
