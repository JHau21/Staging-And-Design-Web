import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";

import { theme } from "../../../Theme/index";
import styles from "./index.module.css";

// Note to future Jack: Add an array the maintains all the props passed to this nav bar and map the array passing object items to this link component?
const BasicLink = ({ name, link, component } = props) => {
  return (
    <div className={styles.linkContainer}>
      <Link
        style={fontGeneral}
        to={"/Home"}
        className={styles.linkText}
        onClick={() => history.push("/Home")}
      >
        Home
      </Link>
    </div>
  );
};

// The style and layout of the actual navigation bar
const NavigationBar = () => {
  const fontGeneral = {
    ...theme.font.semiBold,
    fontSize: theme.fontSize.large,
  };

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {}, [location]);

  return (
    <div className={styles.root}>
      <Router>
        <div className={styles.linkContainer}>
          <Link
            style={fontGeneral}
            to={"/Home"}
            className={styles.linkText}
            onClick={() => history.push("/Home")}
          >
            Home
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            style={fontGeneral}
            to={"/Portfolio"}
            className={styles.linkText}
            onClick={() => history.push("/Portfolio")}
          >
            Portfolio
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            style={fontGeneral}
            to={"/Services"}
            className={styles.linkText}
            onClick={() => history.push("/Services")}
          >
            Services
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            style={fontGeneral}
            to={"/Schedule"}
            className={styles.linkText}
            onClick={() => history.push("/Schedule")}
          >
            Schedule
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link
            style={fontGeneral}
            to={"/About"}
            className={styles.linkText}
            onClick={() => history.push("/About")}
          >
            About
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default NavigationBar;
