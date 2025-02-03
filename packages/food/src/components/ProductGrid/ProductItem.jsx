import React, { useState } from "react";
import styles from "./ProductItem.module.scss";

const ProductItem = (props) => {
  const { itemDetails } = props;
  const [loading, setLoading] = useState(true);
  const title =
    itemDetails.title?.length > 20
      ? itemDetails.title.slice(0, 20) + "..."
      : itemDetails.title;

  return (
    <div className={styles.productItem}>
      <div className={styles.productImageContainer}>
        {loading ? <div>Loading...</div> : null}
        <img src={itemDetails.image_url} onLoad={() => setLoading(false)} />
      </div>
      <div>
        <div title={itemDetails.title}>{title || "No title"}</div>
      </div>
    </div>
  );
};

export default ProductItem;
