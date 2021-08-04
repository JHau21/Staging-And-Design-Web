import React from "react";

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
  return <div className={styles.root}>Hello! Welcome to my new website!</div>;
};

export default Home;
