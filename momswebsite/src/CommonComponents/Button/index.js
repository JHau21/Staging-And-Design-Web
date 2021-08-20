import React, { useState } from "react";
import classnames from "classnames";

import { theme } from "../../Theme/index";
import styles from "./index.module.css";

const defaultStyling = {
  ...theme.font.semiBold,
  fontSize: theme.fontSize.medium,
};

const Button = ({
  text = "Button", // Button text to render
  className = classnames(styles.root, styles.buttonGeneral), // Class styling if user wants to control hover and active states
  disabledClassName = classnames(styles.disabled, styles.buttonGeneral), // Disabled styling to present user feedback for an obviously disabled button
  style = defaultStyling, // Inline styling if user wants to use theme object
  disabled = false, // Boolean to determine whether or not button should be currently disabled
  onClick = () => {},
}) => {
  return (
    <button
      className={disabled ? disabledClassName : className}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
