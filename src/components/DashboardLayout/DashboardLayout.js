import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { AnimatePresence, motion } from "framer-motion";
import { getDashboard, handAddBoardToDashboard } from "./store";
import { getBoards } from "../BoardLayout";
import { Project } from "./components";
import { dashboardAnimation } from "./motionSettings";
import { Logo } from "../Common";
import "./styles/_dashboardLayout.scss";

const DashboardLayout = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const boardOrder = useSelector(getDashboard);
  const boards = useSelector(getBoards);
  const [title, setTitle] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const id = uuid();
    dispatch(handAddBoardToDashboard(id, title));
  }

  console.log(`boardOrder`, boardOrder);

  const renderBoards = () => {
    const mapBoards = [
      "boards#1",
      "boards#2",
      "boards#3",
      "boards#4",
      "boards#5",
    ];

    return (
      <div className="projectDragContainer">
        <div className="projectDragContainer_area">
          {mapBoards &&
            mapBoards.map((boardID, index) => {
              const board = boards[boardID];
              const newBoard = [
                "board-0",
                "board-0",
                "board-0",
                "board-0",
                "board-0",
              ];

              return <Project {...newBoard} boardID={boardID} index={index} />;
            })}
        </div>
      </div>
    );
  };

  const AddNewBoardInput = () => {
    return (
      <form className="dashboardLayout_form" onSubmit={handleSubmit}>
        <input
          className="dashboardLayout_form_input"
          onChange={(e) => handleChange(e)}
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
      className="dashboardLayout"
      key="dashboard"
      initial="initial"
      animate="animate"
      exit="exit"
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

  const LogoutButton = () => {
    function handleSignOut() {
      history.push("/");
    }

    return (
      <button onClick={handleSignOut} className="signOutButton">
        sign out
      </button>
    );
  };

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
    <AnimatePresence exitBeforeEnter>
      <Container>
        {Title()}
        {Options()}
        {AddNewProjectButton()}
        {AddNewBoardInput()}
        {renderBoards()}
        {LogoutButton()}
      </Container>
    </AnimatePresence>
  );
};

export default DashboardLayout;
