import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDashboard, handAddBoardToDashboard } from "./store";
import { getBoards } from "../BoardLayout";
import { Project } from "./components";
import { v4 as uuid } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { dashboardAnimation } from "./motionSettings";
import "./styles/_dashboardLayout.scss";
import { Logo } from "../Common";

const DashboardLayout = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const boardOrder = useSelector(getDashboard);
  const boards = useSelector(getBoards);
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSignOut() {
    history.push("/");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const id = uuid();
    dispatch(handAddBoardToDashboard(id, title));
  }

  const renderBoards = () => {
    return (
      boardOrder &&
      boardOrder.map((boardID) => {
        const board = boards[boardID];

        return (
          <div className="dashboardLayout_section_projects">
            <Link
              className="dashboardLayout_section_projects_link"
              key={boardID}
              to={`/${board.id}`}
            >
              <Project {...board} />
            </Link>
          </div>
        );
      })
    );
  };

  const addNewBoardInput = () => {
    return (
      <form className="dashboardLayout_form" onSubmit={handleSubmit}>
        <input
          className="dashboardLayout_form_input"
          onChange={handleChange}
          value={title}
          placeholder="type the name of project..."
          type="text"
        />
      </form>
    );
  };

  const Container = ({ children }) => (
    <motion.div
      {...dashboardAnimation}
      key="dashboard"
      initial="initial"
      animate="animate"
      exit="exit"
      className="dashboardLayout"
    >
      {children}
    </motion.div>
  );

  const Options = () => (
    <div className="dashboardLayout__options">
      <span className="dashboardLayout__options_settings" />
      <span className="dashboardLayout__options_photo" />
    </div>
  );

  const LogoutButton = ({ handleSignOut }) => (
    <button onClick={handleSignOut} className="signOutButton">
      sign out
    </button>
  );

  const AddNewProjectButton = () => (
    <div className="dashboardLayout_addNewProject-button">
      + add new project
    </div>
  );

  const Title = () => (
    <div className="dashboardLayout_title">
      <Logo />
    </div>
  );

  useEffect(() => {}, [boardOrder]);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Container>
        {Title()}
        {Options()}
        {AddNewProjectButton()}
        {addNewBoardInput()}
        <div className="dashboardLayout_section">{renderBoards()}</div>
        <LogoutButton handleSignOut={handleSignOut} />
      </Container>
    </AnimatePresence>
  );
};

export default DashboardLayout;
