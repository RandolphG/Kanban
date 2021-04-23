import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { BoardLayout, Home } from "../components";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/:boardID" component={BoardLayout} />
      </div>
    </Router>
  );
};

export default AppRouter;
