import { Link } from "react-router-dom";
import React from "react";
import "./styles/_backButton.scss";

const BackButton = () => (
  <Link className="boardLayout_backButton" to="/dashboard">
    <svg viewBox="0 0 16 16" fill="none" role="presentation" focusable="false">
      <path
        d="M0 12.782c0 .85.1 1.65.3 2.45.1.45.35.45.5 0 1.05-2.65 2.75-5.15 5.55-5.65H8v2.2c0 1 .6 1.3 1.3.7l6.4-5.5c.35-.3.35-.8 0-1.15L9.3.332c-.7-.65-1.3-.3-1.3.65v2.35c-4.8.8-8 4.7-8 9.45z"
        fill="currentColor"
      />
    </svg>
  </Link>
);

export default BackButton;
