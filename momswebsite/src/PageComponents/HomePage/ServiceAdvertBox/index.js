import React from "react";

import Button from "../../../CommonComponents/Button";

import HomeImageMain from "../../../Assets/Images/mainPanelBackground.png";

import { theme } from "../../../Theme/index";
import styles from "./index.module.css";

const ServiceAdvertBox = ({
  advertBoxText = "We love design!",
  advertBoxButton = <Button />,
  advertBoxImage = HomeImageMain,
  advertBoxContainer = styles.root,
  advertBoxTextContainer = styles.textAndButtonContainer,
  advertBoxImageStyle = styles.image,
  alignImage = "right",
}) => {
  return (
    <div
      className={advertBoxContainer}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: alignImage === "left" ? "flex-start" : "flex-end",
      }}
    >
      <img className={advertBoxImageStyle} src={advertBoxImage} />
      <div className={advertBoxTextContainer}>
        <h2
          style={{
            color: theme.palette.black,
            ...theme.font.semiBold,
            fontSize: theme.fontSize.large,
          }}
        >
          {advertBoxText}
        </h2>
        {advertBoxButton}
      </div>
    </div>
  );
};

export default ServiceAdvertBox;
