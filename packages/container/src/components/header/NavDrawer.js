import React from "react";
import { Drawer } from "@material-ui/core";
import styles from "./Header.module.scss";

const NavDrawer = (props) => {
  return (
    <Drawer anchor={"right"} open={props.showDrawer} onClose={props.onClose}>
      <div className={styles.drawerItem}>Item1</div>
      <div className={styles.drawerItem}>Item1</div>
      <div className={styles.drawerItem}>Item1</div>
    </Drawer>
  );
};

export default NavDrawer;
