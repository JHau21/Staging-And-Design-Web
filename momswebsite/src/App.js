import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Routes from "./PageComponents/Navigation/Routes";
import Button from "./CommonComponents/Button";

import { theme } from "./Theme/index";
import styles from "./App.module.css";

function App() {
  // At the moment let's just route straight to the home page
  // In the future it would be wise to handle different browser needs and settings in here
  // FYI: the CSS has to change depending on you browser
  // NOTE: I use a prettier configuration, so every time I same it auto formats my code, in case you're wondering about the formatting
  const history = useHistory();

  // Life is hard and software generally works asynchronously, so I added a useEffect for rendering the base url
  useEffect(() => {
    if (history) {
      history.push("/Home"); // Since I don't know how to memoize user actions in the browser, let's just take the user to the home page every time
    }
  }, [history]);

  return (
    <div
      className={styles.root}
      style={{ backgroundColor: theme.palette.cyan }}
    >
      <Routes />
    </div>
  );
}

export default App;
