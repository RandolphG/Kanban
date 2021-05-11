import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  Notification,
  DashboardLayout,
  BoardLayout,
  ScrollIntro,
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
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Notification />
            <Switch location={location} key={location.pathname}>
              <Route exact path="/dashboard" component={DashboardLayout} />
              <Route path="/:boardID" component={BoardLayout} />
              <Route exact path="/" component={ScrollIntro} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
};

export default AppRouter;
