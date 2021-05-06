import React, { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/_projects.scss";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { removeBoard } from "../../store";
import { remove } from "../../../BoardLayout";

/* TODO resolve deleting issue regarding the INTERSECTION OBSERVER */

const Project = forwardRef(({ title, boardID, index }, ref) => {
  const dispatch = useDispatch();

  const setReferences = (element) => {
    if (ref && ref.current) {
      ref.current[index] = element;
    }
  };

  /* images */
  const Image = () => <span className="projects_link_photo" />;

  /* title of projects */
  const Title = () => <span className="title">{title}</span>;

  /* simple description of projects */
  const Description = () => (
    <span className="description">
      in order to know about what's going on here write something here..
    </span>
  );

  useEffect(() => {}, [ref]);

  return (
    <motion.div
      ref={(element) => setReferences(element)}
      className="projects"
      initial={{ x: 50, opacity: 0, scale: 0.75 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ x: 50, opacity: 0, scale: 0 }}
      transition={{ duration: 0.2 }}
      fo
    >
      <span className="projects_link" key={boardID}>
        <span
          onClick={() => {
            // dispatch(removeBoard({ boardID }));
            // dispatch(remove({ boardID }));
          }}
          className="projects_link_deleteButton"
        >
          X
        </span>
        {Image()}
        <div className="projects_link_info">
          {Title()}
          {Description()}
          <Link className="link" to={`/board-0`}>
            Preview
          </Link>
        </div>
      </span>
    </motion.div>
  );
});
export default Project;
