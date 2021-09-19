import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  useLocation,
} from "react-router-dom";
import classnames from "classnames";

import { theme } from "../../../Theme/index";
import styles from "./index.module.css";

// The style and layout of the actual navigation bar
const NavigationBar = () => {
  const fontGeneral = {
    ...theme.font.semiBold,
    fontSize: theme.fontSize.semiKindOfLarge,
  };

  const history = useHistory();
  const location = useLocation();

  const determineStyle = (route, isContainer = false) => {
    if (isContainer) {
      return classnames(
        styles.linkContainer,
        location.pathname === route ? styles.yellowBar : styles.whiteBar
      );
    }
    return classnames(
      styles.linkText,
      location.pathname === route ? styles.yellow : styles.white
    );
  };

  return (
    <div className={styles.root}>
      <Router>
        <div
          className={determineStyle("/Home", true)}
          onClick={() => history.push("/Home")}
        >
          <Link
            style={fontGeneral}
            to={"/Home"}
            className={determineStyle("/Home")}
          >
            Home
          </Link>
        </div>
        <div
          className={determineStyle("/Portfolio", true)}
          onClick={() => history.push("/Portfolio")}
        >
          <Link
            style={fontGeneral}
            to={"/Portfolio"}
            className={determineStyle("/Portfolio")}
          >
            Portfolio
          </Link>
        </div>
        <div
          className={determineStyle("/Services", true)}
          onClick={() => history.push("/Services")}
        >
          <Link
            style={fontGeneral}
            to={"/Services"}
            className={determineStyle("/Services")}
          >
            Services
          </Link>
        </div>
        <div
          className={determineStyle("/Schedule", true)}
          onClick={() => history.push("/Schedule")}
        >
          <Link
            style={fontGeneral}
            to={"/Schedule"}
            className={determineStyle("/Schedule")}
          >
            Schedule
          </Link>
        </div>
        <div
          className={determineStyle("/About", true)}
          onClick={() => history.push("/About")}
        >
          <Link
            style={fontGeneral}
            to={"/About"}
            className={determineStyle("/About")}
          >
            About
          </Link>
        </div>
      </Router>
    </div>
  );
};

export default NavigationBar;
