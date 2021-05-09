import React from "react";
import "./styles/_addProjectButton.scss";
import { Tooltip } from "../../../Common";

const AddProjectButton = ({ isOpen, toggleOpen }) => (
  <button className="addProjectButton" onClick={toggleOpen} disabled={isOpen}>
    <Tooltip label="add new project" /> <span>+ project</span>
  </button>
);

export default AddProjectButton;
