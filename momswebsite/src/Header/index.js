import React from "react";
import { useLocation } from "react-router-dom";
import classnames from "classnames";

import NavigationBar from "../PageComponents/Navigation/NavigationBar";

import styles from "./index.module.css";

// Simple component just to organize and format header
const Header = () => {
  const location = useLocation();
  return (
    <div
      className={
        location.pathname === "/Home"
          ? styles.root
          : classnames(styles.root, styles.whiteBottom)
      }
    >
      <div className={styles.logoContainer}>
        <img
          className={styles.logo}
          alt={"logo"}
          // NOTE: This image is not the website logo
          // Since I do not have the logo, I'm using this as a place holder
          src={
            "https://images-platform.99static.com/hEVT_Y_a6Jehq2xRaRuCz86FLpE=/204x204:1836x1836/500x500/top/smart/99designs-contests-attachments/118/118006/attachment_118006897"
          }
        />
      </div>
      <NavigationBar />
      <div className={styles.linkedInContainer}>
        <img
          className={styles.linkedInLogo}
          alt={"logo other"}
          // NOTE: For this we should probably find a better linkedIn logo
          src={
            "http://iconsetc.com/icons-watermarks/simple-dark-gray/social-media/social-media_linkedin/social-media_linkedin_simple-dark-gray_512x512.png"
          }
        />
      </div>
    </div>
  );
};

export default Header;
