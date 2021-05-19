import React from "react";

const ArrowBtnSelect = ({ onMouseEnter, onMouseLeave, onClick }) => (
  <rect
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    id="arrowBtn"
    width="100"
    height="100"
    opacity="0"
    x="550"
    y="220"
    style={{ cursor: "pointer" }}
  />
);

export default ArrowBtnSelect;
