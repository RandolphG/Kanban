import React from "react";
import { Link } from "react-router-dom";

const Project = ({ title, boardID, index }) => {
  return (
    <div key={index} className="projects">
      <Link
        className="projects_link"
        key={boardID}
        // to={`/${board.id}`}
      >
        <span className="projects_link_photo" />
        <div className="projects_link_info">
          <span className="title">{title}</span>
          <span className="description">
            in order to know about what's going on here write something here..
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Project;
