import React from "react";
import ProductItem from "./ProductItem.jsx";
import styles from "./ProductGrid.module.scss";

const ProductGrid = (props) => {
  const { productItems } = props;

  if (!productItems) {
    return null;
  }

  const grid = productItems.map((item) => <ProductItem itemDetails={item} />);

  return <div className={styles.gridContainer}>{grid}</div>;
};

export default ProductGrid;
