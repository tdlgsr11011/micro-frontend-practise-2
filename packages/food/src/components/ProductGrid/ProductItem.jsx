import React from "react";
import styles from "./ProductItem.module.scss";

const ProductItem = (props) => {
  const { itemDetails } = props;
  return <div className={styles.productItem}>Item</div>;
};

export default ProductItem;
