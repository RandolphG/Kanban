import React from "react";
import { Link } from "react-router-dom";
import "./styles/_button.scss";

const Button = ({ boardID, location }) => {
  const path = `${location.pathname}/${boardID}`;

  return (
    <Link className="link" to={`${location.pathname}/${boardID}`}>
      <div className="button">
        <span />
        <span />
        <span />
        <span />
        Preview
      </div>
    </Link>
  );
};

export default Button;
