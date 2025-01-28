import React, { useState } from "react";


import NavDrawer from "./NavDrawer";
import MenuButton from "./MenuButton";

import styles from "./Header.module.scss";

export default function Header() {
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer((prev) => !prev);
  };

  return (
    <React.Fragment>
      <nav className={styles.navbar}>
        <div className={styles.navTitle}>React Microfrontend</div>
        <div className={styles.navItems}>
          <div className={styles.navItem}>Item1</div>
          <div className={styles.navItem}>Item2</div>
          <div className={styles.navItem} style={{ paddingRight: "1rem" }}>
            Item3
          </div>
          <MenuButton onClick={toggleDrawer} />
        </div>
        <NavDrawer onClose={toggleDrawer} showDrawer={showDrawer} />
      </nav>
    </React.Fragment>
  );
}
