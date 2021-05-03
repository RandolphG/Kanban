import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Notification,
  DashboardLayout,
  BoardLayout,
  LoginLayout,
} from "../components/";

/**
 * application router
 * @returns {JSX.Element}
 * @constructor
 */
const AppRouter = () => {
  return (
    <Router>
      <Route
        render={({ location }) => {
          console.log(`\nlocation -->`, location);
          return (
            <AnimatePresence exitBeforeEnter>
              <Notification />
              <Switch location={location} key={location.pathname}>
                <Route path="/:boardID" component={BoardLayout} />
                <Route exact path="/dashboard" component={DashboardLayout} />
                <Route exact path="/" component={LoginLayout} />
              </Switch>
            </AnimatePresence>
          );
        }}
      />
    </Router>
  );
};

export default AppRouter;
