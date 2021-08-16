import React, { useRef } from "react";
import classnames from "classnames";

import Arrow from "../Assets/Images/arrow.png";
import styles from "./index.module.css";

const Swiper = ({
  images = [
    "http://hometenders.com/wp-content/uploads/2018/11/Hometenders-Home-Staging-and-Design-St-Louis-MO-5.jpg",
  ],
  loop,
  onClick,
  root = styles.root,
  autoPlay,
  arrow = Arrow,
  // Not sure if we'll ever do this, but in case we want we can custom style pretty much everything in the swiper from outside the swiper
  arrowContainerLeft = styles.arrowContainer,
  arrowContainerRight = styles.arrowContainer,
  arrowStyle = styles.arrow,
  imageContainer = styles.alignedImages,
  imageStyle = styles.image,
}) => {
  const imagesRef = useRef(null);

  const handleSwipeAndArrowClick = (direction = "") => {
    if (direction === "left") {
      // handle a left swipe
    } else if (direction === "right") {
      // handle a right swipe
    } else {
      // Do click and drag control here
    }
  };

  return (
    <div className={root}>
      <div
        className={arrowContainerLeft}
        // We want to remove all inline styling if custom containers are passed in
        style={
          arrowContainerLeft !== styles.arrowContainer
            ? null
            : { transform: "rotate(180deg)", top: "45%", left: "1%" }
        }
        onClick={handleSwipeAndArrowClick("left")}
      >
        <img className={arrowStyle} src={arrow} />
      </div>
      <div
        className={arrowContainerRight}
        style={
          arrowContainerLeft !== styles.arrowContainer
            ? null
            : { top: "45%", right: "0%" }
        }
        onClick={handleSwipeAndArrowClick("right")}
      >
        <img className={arrowStyle} src={arrow} />
      </div>
      <div className={styles.alignedImages} ref={imagesRef}>
        {images.map((image) => (
          <img src={image} className={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default Swiper;
