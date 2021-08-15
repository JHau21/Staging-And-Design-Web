import React from "react";

import { theme } from "../Theme";
import styles from "./index.module.css";

const Footer = () => {
  const fontGeneral = {
    ...theme.font.regular,
    fontSize: theme.fontSize.small,
    margin: 0,
  };

  return (
    <div
      className={styles.root}
      style={{ backgroundColor: theme.palette.darkestGray }}
    >
      <div className={styles.textContainer}>
        <div className={styles.topRow}>
          <p style={{ ...fontGeneral }}>
            Copyright @ 2021 Simply Stated Staging and Design. All rights
            reserved.
          </p>
        </div>
        <div className={styles.bottomRow}>
          <p style={{ ...fontGeneral }}>Privacy Policy</p>
          <p style={{ ...fontGeneral }}>Feedback</p>
          <p style={{ ...fontGeneral }}>Help</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
