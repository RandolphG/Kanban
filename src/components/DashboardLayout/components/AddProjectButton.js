import React from "react";

const AddProjectButton = ({ isOpen, toggleOpen }) => (
  <button
    className="dashboardLayout_addProjectButton"
    onClick={toggleOpen}
    disabled={isOpen}
  >
    + add project
  </button>
);

export default AddProjectButton;
