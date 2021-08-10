import React from "react";

import { theme } from "../Theme";
import styles from "./index.module.css";

const Footer = () => {
  const fontGeneral = {
    ...theme.font.semiBold,
    color: theme.palette.white,
    fontSize: theme.fontSize.semiLarge,
  };

  return (
    <div
      className={styles.root}
      style={{ backgroundColor: theme.palette.darkestGray }}
    >
      <div className={styles.textContainer}>
        <p></p>
        <div className={styles.bottomRow}>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
