import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { BoardLayout, Home } from "../components";
import { DashboardLayout } from "../components/DashboardLayout";

const AppRouter = () => {
  return (
    <Router>
      {/*<Route path="/" exact component={Home} />*/}
      <Route path="/" exact component={DashboardLayout} />
      <Route path="/:boardID" component={BoardLayout} />
    </Router>
  );
};

export default AppRouter;
