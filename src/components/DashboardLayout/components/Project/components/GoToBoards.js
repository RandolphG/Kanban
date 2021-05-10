import { Link } from "react-router-dom";
import React from "react";

const GoToBoards = ({ boardID }) => (
  <Link className="link" to={boardID}>
    Preview
  </Link>
);

export default GoToBoards;
