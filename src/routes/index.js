import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { DashboardLayout, Intro } from "../components/";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route path="/dashboard" component={DashboardLayout} />
              <Route exact path="/" component={Intro} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default AppRouter;
