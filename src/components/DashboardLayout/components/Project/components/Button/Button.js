import React from "react";
import { Link } from "react-router-dom";
import "./styles/_button.scss";

const Button = ({ boardID }) => {
  return (
    <Link className="link" to={boardID}>
      <div className="button" href="#">
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
