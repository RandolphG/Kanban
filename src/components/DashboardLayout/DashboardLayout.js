import React, { useEffect, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { getDashboard, handAddBoardToDashboard } from "./store";
import { getBoards } from "../BoardLayout";
import { dashboardAnimation } from "./motionSettings";
import { Logo } from "../Common";
import { v4 as uuid } from "uuid";
import { Project } from "./components";
import "./styles/_dashboardLayout.scss";

const DashboardLayout = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const boardOrder = useSelector(getDashboard);
  const boards = useSelector(getBoards);

  let singleRefs = useRef([]);
  let mouseDown = false;
  let startX, scrollLeft;
  const draggableArea = useRef();

  const [title, setTitle] = useState("");
  const [showInput, setShowInput] = useState(false);

  const colors = [
    "#f1bace",
    "#ffbc00",
    "#cfdfde",
    "#3c94c5",
    "#99aba0",
    "#b0e6db",
    "#fe6f62",
    "#f8bbc6",
    "#08bac3",
    "#dcdcdc",
  ];

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const id = uuid();
    dispatch(handAddBoardToDashboard(id, title));
    setTitle("");
  }

  function startDragging(e) {
    mouseDown = true;
    startX = e.pageX - draggableArea.current.offsetLeft;
    scrollLeft = draggableArea.current.scrollLeft;
  }

  function stopDragging(e) {
    mouseDown = false;
  }

  function dragging(e) {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - draggableArea.current.offsetLeft;
    const scroll = x - startX;
    draggableArea.current.scrollLeft = scrollLeft - scroll;
  }

  function callbackFunction(entries) {
    const randomColors = Math.floor(Math.random() * colors.length);

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "scale(1)";
        draggableArea.current.style.backgroundColor = colors[randomColors];
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "scale(.35)";
        draggableArea.current.style.backgroundColor = colors[randomColors];
      }
    });
  }

  const renderBoards = () => {
    return (
      <div className="projectDragContainer">
        <div
          className="projectDragContainer_area "
          onMouseDown={startDragging}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onMouseMove={dragging}
          ref={draggableArea}
        >
          {boardOrder &&
            boardOrder.map((boardID, index) => {
              const board = boards[boardID];

              return (
                <Project
                  ref={singleRefs}
                  key={index}
                  {...board}
                  boardID={boardID}
                  index={index}
                />
              );
            })}
        </div>
      </div>
    );
  };

  const AddNewBoardInput = () => {
    return (
      <motion.div
        className="dashboardLayout_container"
        key="addNewBoardInput"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
      >
        <form
          className="dashboardLayout_container_form"
          onSubmit={handleSubmit}
        >
          <input
            className="dashboardLayout_container_form_input"
            onChange={handleChange}
            value={title}
            placeholder="type the name of project..."
            type="text"
          />
        </form>
        <button
          onClick={displayInput}
          className="dashboardLayout_container_cancelButton"
        >
          Cancel
        </button>
      </motion.div>
    );
  };

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

  function displayInput() {
    setShowInput(!showInput);
  }

  const AddNewProjectButton = () => (
    <button
      className="dashboardLayout_addNewProject-button"
      onClick={displayInput}
      disabled={showInput}
    >
      + add new project
    </button>
  );

  const Title = () => (
    <div className="dashboardLayout_title">
      <Logo />
    </div>
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      threshold: 0.25,
    });

    if (singleRefs) {
      singleRefs.current.forEach((ref) => {
        observer.observe(ref);
      });
    }

    return () => {
      if (singleRefs) {
        singleRefs.current.forEach((ref) => {
          observer.disconnect();
        });
      }
    };
  }, [singleRefs]);

  useEffect(() => {}, [boardOrder]);

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        {...dashboardAnimation}
        className="dashboardLayout"
        key="dashboard"
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {Title()}
        {Options()}
        {AddNewProjectButton()}
        {showInput && AddNewBoardInput()}
        {renderBoards()}
        {LogoutButton()}
      </motion.div>
    </AnimatePresence>
  );
};

export default DashboardLayout;
