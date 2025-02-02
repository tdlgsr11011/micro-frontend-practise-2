import React from "react";
import styles from "./ProductItem.module.scss";

const ProductItem = (props) => {
  const { itemDetails } = props;
  const title =
    itemDetails.title?.length > 20
      ? itemDetails.title.slice(0, 20) + "..."
      : itemDetails.title;

  return (
    <div className={styles.productItem}>
      <div className={styles.productImageContainer}>
        <img src={itemDetails.image_url} />
      </div>
      <div>
        <div>{title || "No title"}</div>
      </div>
    </div>
  );
};

export default ProductItem;
