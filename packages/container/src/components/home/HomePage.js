import React from "react";

import myImage from "../../assets/images/20241108_125213_2.jpg";
import styles from "./HomePage.module.scss";

const HomePage = (props) => {
  return (
    <div className={styles.homePageContainer}>
      <div className={styles.profileContainer}>
        <div className={styles.imgContainer}>
          <img src={myImage} />
          <div>Atharv Joshi</div>
        </div>
        <div className={styles.welcomeMessage}>
          <div>
            Hi, thanks for taking a minute to ckeck my resume, and more
            importantly, this app!
          </div>
          <div>
            I am just making an attempt to flex my skills here. To do so, I have
            built this app made of several smaller Microfrontends which are
            linked in the navbar at the top.
          </div>
          <div>
            Do check out the github repository as well if you'd like to go
            through the code.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
