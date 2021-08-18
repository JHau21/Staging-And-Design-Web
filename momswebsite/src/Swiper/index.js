import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames";

import Arrow from "../Assets/Images/arrow.png";
import styles from "./index.module.css";

const Swiper = ({
  images = [
    "http://hometenders.com/wp-content/uploads/2018/11/Hometenders-Home-Staging-and-Design-St-Louis-MO-5.jpg",
    "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG91c2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    "https://media.architecturaldigest.com/photos/56b524de4ac3d842677b9ac0/master/w_2323,h_1548,c_limit/home-office-01.jpg",
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSwipeAndArrowClick = (direction = "") => {
    const imageWidth = imagesRef.current.scrollWidth / images.length; // Get the width of each image
    const currIndex = imagesRef.current.scrollLeft / imageWidth;
    // If we go right we increment the dom's scrollLeft (the current offset from left side of scroll container) to move to the next image on the right
    if (direction === "right") {
      // If the end of the swiper is reached let's too the user back to the beginning
      if (currIndex + 1 === images.length) {
        setCurrentIndex(0); // Also set the current index to track where we are in the swiper
        imagesRef.current.scrollLeft = 0;
      } else {
        setCurrentIndex(currIndex + 1); // Also set the current index to track where we are in the swiper
        imagesRef.current.scrollLeft = (currIndex + 1) * imageWidth;
      }
      // If we go left we decrement the dom's scrollLeft (the current offset from left side of scroll container) to move to the next image on the left
    } else if (direction === "left") {
      if (currIndex - 1 < 0) {
        setCurrentIndex(images.length); // Also set the current index to track where we are in the swiper
        imagesRef.current.scrollLeft = images.length * imageWidth;
      } else {
        setCurrentIndex(currIndex - 1); // Also set the current index to track where we are in the swiper
        imagesRef.current.scrollLeft = (currIndex - 1) * imageWidth;
      }
    } else {
      console.log("another type of scroll?");
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
        onClick={() => handleSwipeAndArrowClick("left")}
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
        onClick={() => handleSwipeAndArrowClick("right")}
      >
        <img className={arrowStyle} src={arrow} />
      </div>
      <div
        onScroll={() => handleSwipeAndArrowClick()}
        className={styles.alignedImages}
        ref={imagesRef}
      >
        {images.map((image) => (
          <img src={image} className={styles.image} />
        ))}
      </div>
    </div>
  );
};

export default Swiper;
