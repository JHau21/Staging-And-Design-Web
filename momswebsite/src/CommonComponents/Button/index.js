import React from "react";

import { theme } from "../../Theme/index";
import styles from "index.module.css";

const Button = ({
  color,
  text,
  textSize,
  fontFamily = "semiBold",
  className,
  onClick,
}) => {
  return (
    <button
      className={className ? className : styles.root}
      style={{
        color: color ? color : theme.palette.yellow,
        fontSize: textSize ? textSize : theme.fontSize.medium,
        ...theme.font.fontFamily,
      }}
      text={text}
      onClick={onClick()}
    />
  );
};

export default Button;
