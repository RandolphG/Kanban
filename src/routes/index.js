import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { DashboardLayout, BoardLayout } from "../components/";
import { Test } from "../components/test";

const AppRouter = () => {
  return (
    <Router>
      <Route path="/" exact component={Test} />
      {/*<Route path="/" exact component={DashboardLayout} />*/}
      {/*<Route path="/:boardID" component={BoardLayout} />*/}
    </Router>
  );
};

export default AppRouter;
