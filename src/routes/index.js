import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { DashboardLayout, BoardLayout } from "../components/";
import { Filter } from "../components/Filter";

const AppRouter = () => {
  return (
    <Router>
      {/*<Route path="/" exact component={Filter} />*/}
      <Route path="/" exact component={DashboardLayout} />
      <Route path="/:boardID" component={BoardLayout} />
    </Router>
  );
};

export default AppRouter;
