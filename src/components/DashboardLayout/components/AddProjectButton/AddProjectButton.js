import React from "react";
import "./styles/_addProjectButton.scss";

const AddProjectButton = ({ isOpen, toggleOpen }) => (
  <button className="addProjectButton" onClick={toggleOpen} disabled={isOpen}>
    + add project
  </button>
);

export default AddProjectButton;
