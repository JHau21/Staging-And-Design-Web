import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import NavigationBar from "../NavigationBar";
import Portfolio from "../../PortfolioPage";
import Services from "../../ServicesPage";
import Schedule from "../../SchedulePage";
import Home from "../../HomePage";
import About from "../../AboutPage";
import Footer from "../../../Footer";

/**
 * This contains all routes on the website
 * In essence, if you click a button and want to go somewhere place the link where you want to arrive in here
 * Essentially, a route is a wrapper component that has a defined path (url) that represents a page
 * The thing that's actually wrapped is the component represented by the url
 * The switch essentially matches the currently set url to the represented component
 * If you history.push() some url the switch will search through the routes until it finds the corresponding route url, rendering the given page
 * history is the stack represented the users path with urls
 * The top of the history stack is the current page, while the bottom is the first page visited
 * Each time you go back on your browser, an element from the stack is popped
 * The switches and route can nested an infinite number of layers deep and exist solely to organize navigation
 */
const Routes = () => {
  return (
    <div>
      <Router>
        {/* Path renders if the url includes the specified path */}
        <Route path="/">
          <NavigationBar />
        </Route>
        <Switch>
          {/* Exact path on the other hand renders only if the url is exactly the specified path */}
          <Route exact path="/Portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
          <Route exact path="/Schedule">
            <Schedule />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
        <Route path="/">
          <Footer />
        </Route>
      </Router>
    </div>
  );
};

export default Routes;
