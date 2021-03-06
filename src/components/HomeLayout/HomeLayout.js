import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useCycle } from "framer-motion";
import { getBoards } from "../BoardLayout";
import { v4 as uuid } from "uuid";
import { onAddNotification } from "../Common";
import { homeLayout } from "./motionSettings";
import { getDashboard, handAddBoardToDashboard } from "../DashboardLayout";
import { AddBoardInput, AddProjectButton, RenderBoards } from "./components";
import "./styles/_homeLayout.scss";

const HomeLayout = ({ match, location }) => {
  let singleRefs = useRef([]);
  let mouseDown = false;
  let startX, scrollLeft;

  const dispatch = useDispatch();
  const [isOpen, toggleOpen] = useCycle(false, true);
  const boardOrder = useSelector(getDashboard);
  const boards = useSelector(getBoards);
  const draggableArea = useRef();
  const [title, setTitle] = useState("");

  function handleChange(e) {
    e.preventDefault();
    setTitle(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const id = uuid();
    dispatch(handAddBoardToDashboard(id, title));
    dispatch(onAddNotification({ title }));
    setTitle("");
    toggleOpen();
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
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "scale(1)";
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "scale(.35)";
      }
    });
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, {
      threshold: 0.55,
    });

    if (singleRefs && singleRefs.current) {
      singleRefs.current.forEach((ref) => {
        observer.observe(ref);
      });
    }

    return () => {
      if (singleRefs && singleRefs.current) {
        singleRefs.current.forEach((ref) => {
          observer.disconnect();
        });
      }
    };
  }, [singleRefs, boardOrder]);

  return (
    <motion.div key="home" className="home" {...homeLayout}>
      {AddBoardInput({
        handleChange,
        handleSubmit,
        isOpen,
        title,
        toggleOpen,
        setTitle,
      })}
      {RenderBoards({
        boards,
        boardOrder,
        draggableArea,
        singleRefs,
        stopDragging,
        dragging,
        startDragging,
        match,
        location,
      })}
      {AddProjectButton({ isOpen, toggleOpen })}
    </motion.div>
  );
};

export default HomeLayout;
