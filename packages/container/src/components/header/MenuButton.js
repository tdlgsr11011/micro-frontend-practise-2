import React from "react";
import { Menu } from "@material-ui/icons";

import styles from "./Header.module.scss";

const MenuButton = (props) => {
  return (
    <div className={styles.drawerButton} onClick={props.onClick}>
      <Menu />
    </div>
  );
};

export default MenuButton;
