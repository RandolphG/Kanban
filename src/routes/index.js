import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { DashboardLayout, BoardLayout, LoginLayout } from "../components/";
import { Filter } from "../components/Filter";

const AppRouter = () => {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <Switch location={location} key={location.pathname}>
            <Route path="/dashboard" exact component={DashboardLayout} />
            <Route path="/:boardID" exact component={BoardLayout} />
            {/*<Route path="/" exact component={Filter} />*/}
            <Route path="/" exact component={LoginLayout} />
          </Switch>
        )}
      />
    </Router>
  );
};

export default AppRouter;
