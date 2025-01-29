import React from "react";
import styles from "./HomePage.module.scss";

const OtherLinks = () => {
  const openGithub = () => {
    window.open("https://github.com/tdlgsr11011/micro-frontend-practise-2");
  };
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/atharvjoshi2705/");
  };
  return (
    <div className={styles.otherLinks}>
      <div className={styles.github} onClick={openGithub}>
        Github
      </div>
      <div className={styles.linkedin} onClick={openLinkedin}>
        Linkedin
      </div>
    </div>
  );
};

export default OtherLinks;
