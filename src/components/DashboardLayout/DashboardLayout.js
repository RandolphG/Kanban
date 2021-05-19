import React from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { BoardLayout, getBoards } from "../BoardLayout";
import { dashboard } from "./motionSettings";
import { Topbar } from "../Topbar";
import { HomeLayout } from "../HomeLayout";
import { Notification } from "../Common";
import { LogoutButton } from "./components";
import "./styles/_dashboardLayout.scss";

/* TODO
 *   make animation only on hover.
 * */

const DashboardLayout = ({ location }) => {
  let { path } = useRouteMatch();
  let history = useHistory();
  const boards = useSelector(getBoards);
  const projects = Object.keys(boards).length - 3;

  return (
    <motion.div key="dashboard" className="dashboard" {...dashboard}>
      {Topbar({ projects })}
      {Notification()}
      {LogoutButton({ history })}
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path={`${path}/:boardID`} component={BoardLayout} />
          <Route path={`/`} component={HomeLayout} />
        </Switch>
      </AnimatePresence>
    </motion.div>
  );
};

export default DashboardLayout;
