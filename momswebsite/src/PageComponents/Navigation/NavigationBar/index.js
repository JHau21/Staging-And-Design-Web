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
    fontSize: theme.fontSize.large,
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
        <div className={determineStyle("/Home", true)}>
          <Link
            style={fontGeneral}
            to={"/Home"}
            className={determineStyle("/Home")}
            onClick={() => history.push("/Home")}
          >
            Home
          </Link>
        </div>
        <div className={determineStyle("/Portfolio", true)}>
          <Link
            style={fontGeneral}
            to={"/Portfolio"}
            className={determineStyle("/Portfolio")}
            onClick={() => history.push("/Portfolio")}
          >
            Portfolio
          </Link>
        </div>
        <div className={determineStyle("/Services", true)}>
          <Link
            style={fontGeneral}
            to={"/Services"}
            className={determineStyle("/Services")}
            onClick={() => history.push("/Services")}
          >
            Services
          </Link>
        </div>
        <div className={determineStyle("/Schedule", true)}>
          <Link
            style={fontGeneral}
            to={"/Schedule"}
            className={determineStyle("/Schedule")}
            onClick={() => history.push("/Schedule")}
          >
            Schedule
          </Link>
        </div>
        <div className={determineStyle("/About", true)}>
          <Link
            style={fontGeneral}
            to={"/About"}
            className={determineStyle("/About")}
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
