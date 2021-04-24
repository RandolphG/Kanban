import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDashboard, handAddBoardToDashboard } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { getBoards, handleAddBoard } from "../BoardLayout";
import { Project } from "./components";
import "./styles/_dashboardLayout.scss";
import { v4 as uuid } from "uuid";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const boardOrder = useSelector(getDashboard);
  const boards = useSelector(getBoards);
  const [title, setTitle] = useState("");

  function handleChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const id = uuid();
    dispatch(handAddBoardToDashboard(id));
    dispatch(handleAddBoard(title, id));
  }

  const renderBoards = () => {
    return boardOrder.map((boardID) => {
      const board = boards[boardID];

      return (
        <Link
          className="dashboardLayout_section_projects_link"
          key={boardID}
          to={`/${board.id}`}
        >
          <Project {...board} />
        </Link>
      );
    });
  };

  const addNewBoardInput = () => {
    return (
      <form className="dashboardLayout_section_form" onSubmit={handleSubmit}>
        <div className="dashboardLayout_section_form_title">
          Add new Project
        </div>
        <input
          className="dashboardLayout_section_form_input"
          onChange={handleChange}
          value={title}
          placeholder="type the name of project..."
          type="text"
        />
      </form>
    );
  };

  // console.log(`boards`, boardOrder);

  useEffect(() => {}, [boardOrder]);

  return (
    <div className="dashboardLayout">
      <div className="dashboardLayout_section">
        <div className="dashboardLayout_section_projects">{renderBoards()}</div>
        {addNewBoardInput()}
      </div>
    </div>
  );
};
export default DashboardLayout;
