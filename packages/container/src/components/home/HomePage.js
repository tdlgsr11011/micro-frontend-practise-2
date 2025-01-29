import React from "react";

import myImage from "../../assets/images/20241108_125213_2.jpg";
import styles from "./HomePage.module.scss";
import WelcomeMessage from "./WelcomeMessage";
import OtherLinks from "./OtherLinks";

const HomePage = () => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.imgContainer}>
          <img src={myImage} />
          <div>Atharv Joshi</div>
        </div>
        <WelcomeMessage />
      </div>
      <OtherLinks />
    </div>
  );
};

export default HomePage;
