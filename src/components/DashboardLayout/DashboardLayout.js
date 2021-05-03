import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getDashboard, handAddBoardToDashboard } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../BoardLayout";
import { Project } from "./components";
import "./styles/_dashboardLayout.scss";
import { v4 as uuid } from "uuid";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  let history = useHistory();

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
          <Link
            className="dashboardLayout_section_projects_link"
            key={boardID}
            to={`/${board.id}`}
          >
            <Project {...board} />
          </Link>
        );
      })
    );
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

  useEffect(() => {}, [boardOrder]);

  return (
    <div className="dashboardLayout">
      <div className="dashboardLayout_section">
        {addNewBoardInput()}
        <div className="dashboardLayout_section_projects">{renderBoards()}</div>
      </div>
      <button onClick={handleSignOut} className="signOutButton">
        sign out
      </button>
    </div>
  );
};
export default DashboardLayout;
