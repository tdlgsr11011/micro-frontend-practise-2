import React from "react";
import styles from "./Header.module.scss";

export default function Header() {
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
        </div>
      </nav>
    </React.Fragment>
  );
}
