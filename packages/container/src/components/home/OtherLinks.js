import React from "react";
import styles from "./HomePage.module.scss";

const OtherLinks = () => {
  return (
    <div className={styles.otherLinks}>
      <div className={styles.github}>Github</div>
      <div className={styles.linkedin}>Linkedin</div>
    </div>
  );
};

export default OtherLinks;
