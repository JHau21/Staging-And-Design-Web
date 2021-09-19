import React from "react";
import { useHistory } from "react-router-dom";

import Button from "../../CommonComponents/Button";
import ServiceAdvertBox from "./ServiceAdvertBox";

import { advertBoxes } from "./constants";

import HomeImageMain from "../../Assets/Images/mainPanelBackground.png";

import { theme } from "../../Theme/index";
import styles from "./index.module.css";

/**
 * FOR CONNOR:
 * Export HomePage to be used else where within the application
 * The below syntax is arrow notation and is just one way of declaring components in Javascript
 * The syntax just below HomePage is object destructuring where each prop is removed as a constant, so we don't have to do props.something every where
 * Return statement to tell react compiler what to render and front functionality handled just before return
 * import React to allow for component creation and use
 * import styles to get all needed CSS containers
 */
const Home = () => {
  const history = useHistory();

  return (
    <div className={styles.root}>
      <div className={styles.topImageContainer}>
        <img className={styles.largeTopImage} src={HomeImageMain} />
        <div className={styles.textAndButtonContainer}>
          <h1
            style={{
              color: theme.palette.white,
              ...theme.font.bold,
              fontSize: "50px",
            }}
          >
            Give your home the meaning it deserves.
          </h1>
          <h5
            style={{
              color: theme.palette.white,
              ...theme.font.semiBold,
              fontSize: theme.fontSize.large,
            }}
          >
            We help transform your space into the space of your dreams, and are
            with you every step of the way.
          </h5>
          {/* text = "Button", // Button text to render
          className = classnames(styles.root, styles.buttonGeneral), // Class styling if user wants to control hover and active states
          disabledClassName = classnames(styles.disabled, styles.buttonGeneral), // Disabled styling to present user feedback for an obviously disabled button
          style = defaultStyling, // Inline styling if user wants to use theme object
          disabled = false, // Boolean to determine whether or not button should be currently disabled
          onClick = () => {}, */}
          <Button
            style={{ height: "35px", width: "250px" }}
            text={"Learn More"}
            onClick={() => history.push("/About")}
          />
        </div>
      </div>
      <div className={styles.lowerPageContainer}>
        {advertBoxes.map((advertBox) => (
          <ServiceAdvertBox
            advertBoxText={advertBox.advertBoxText}
            advertBoxButton={
              <Button
                style={{ width: "250px", height: "35px" }}
                text={advertBox.advertBoxButtonText}
                onClick={() =>
                  history.push("/" + advertBox.advertBoxButtonText)
                }
              />
            }
            advertBoxImage={advertBox.advertBoxImage}
            alignImage={advertBox.alignImage}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
