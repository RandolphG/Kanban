import React, { forwardRef } from "react";
import { Link } from "react-router-dom";
import "./styles/_projects.scss";

const Project = forwardRef(({ title, boardID, index }, ref) => {
  return (
    <div
      ref={(element) => {
        if (ref && ref.current) {
          ref.current[index] = element;
        }
      }}
      className="projects"
    >
      <Link className="projects_link" key={boardID} to={`/board-0`}>
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
});
export default Project;
