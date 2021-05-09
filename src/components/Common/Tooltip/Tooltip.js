import React from "react";
import "./styles/_tooltip.scss";

/**
 * Tooltip for universal use..
 * @param label
 * @returns {JSX.Element}
 * @constructor
 */
const Tooltip = ({ label }) => {
  return (
    <div className="wrapper">
      <div className="icon object">
        <div className="tooltip">{label}</div>
        <span />
      </div>
    </div>
  );
};

export default Tooltip;
