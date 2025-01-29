import React from "react";
import styles from "./HomePage.module.scss";

const WelcomeMessage = () => {
  return (
    <div className={styles.welcomeMessage}>
      <div>
        Hi, thanks for taking a minute to ckeck my resume, and more importantly,
        this app!
      </div>
      <div>
        I am just making an attempt to flex my skills here. To do so, I have
        built this app made of several smaller Microfrontends which are linked
        in the navbar at the top.
      </div>
      <div>
        Do check out the github repository as well if you'd like to go through
        the code.
      </div>
    </div>
  );
};

export default WelcomeMessage;
