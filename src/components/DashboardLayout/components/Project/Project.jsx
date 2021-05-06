import React, { forwardRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles/_projects.scss";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../BoardLayout";
import { getList } from "../../../ListLayout";

/* TODO
    resolve deleting issue regarding the INTERSECTION OBSERVER
*   Add the image the LINK
    Add hover animation to scale image
    Resolve scrolling to end all the time issue*/

const Project = forwardRef(({ title, boardID, index }, ref) => {
  const dispatch = useDispatch();
  const boards = useSelector(getBoards);
  const lists = useSelector(getList);

  const setReferences = (element) => {
    if (ref && ref.current) {
      ref.current[index] = element;
    }
  };

  /* images */
  const Image = () => <span className="photo" />;

  /* title of projects */
  const Title = () => <span className="title">{title}</span>;

  /* simple description of projects */
  const Description = () => (
    <span className="description">
      in order to know about what's going on here write something here..
    </span>
  );

  const ProfileSvg = () => (
    <svg height="16" viewBox="0 0 16 16" width="16" role="img">
      <clipPath id="a">
        <path d="m0 0h16v16h-16z" />
      </clipPath>
      <g clipPath="url(#a)">
        <path d="m8 6c-.53043 0-1.03914.21071-1.41421.58579-.37508.37507-.58579.88378-.58579 1.41421s.21071 1.03914.58579 1.41421c.37507.37508.88378.58579 1.41421.58579s1.03914-.21071 1.41421-.58579c.37508-.37507.58579-.88378.58579-1.41421s-.21071-1.03914-.58579-1.41421c-.37507-.37508-.88378-.58579-1.41421-.58579zm-6 0c-.53043 0-1.039141.21071-1.414214.58579-.375072.37507-.585786.88378-.585786 1.41421s.210714 1.03914.585786 1.41421c.375073.37508.883784.58579 1.414214.58579s1.03914-.21071 1.41421-.58579c.37508-.37507.58579-.88378.58579-1.41421s-.21071-1.03914-.58579-1.41421c-.37507-.37508-.88378-.58579-1.41421-.58579zm12 0c-.5304 0-1.0391.21071-1.4142.58579-.3751.37507-.5858.88378-.5858 1.41421s.2107 1.03914.5858 1.41421c.3751.37508.8838.58579 1.4142.58579s1.0391-.21071 1.4142-.58579c.3751-.37507.5858-.88378.5858-1.41421s-.2107-1.03914-.5858-1.41421c-.3751-.37508-.8838-.58579-1.4142-.58579z" />
      </g>
    </svg>
  );

  useEffect(() => {
    if (ref && ref.current) {
      ref.current[index].scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

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
          {ProfileSvg()}
        </span>
        {Image()}
        <div className="projects_link_info">
          <div className="projects_link_info_container">
            {Title()}
            <span
              style={{
                display: "flex",
                flexDirection: "row",
                width: "100%",
                background: "green",
              }}
            >
              {boards[boardID].lists.length ? (
                boards[boardID].lists.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      color: "black",
                      border: "solid black 2px",
                      margin: ".5rem .5rem .5rem 0",
                      padding: ".5rem",
                      borderRadius: "4px",
                      height: "65px",
                      width: "150px",
                    }}
                  >
                    {lists[item].title} <br />
                    tasks : {lists[item].cards.length} <br />
                    tags:
                  </div>
                ))
              ) : (
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "50px",
                    width: "100%",
                    margin: ".5rem .5rem .5rem 0",
                  }}
                >
                  nothing to display
                </span>
              )}
            </span>
            {Description()}
            <Link className="link" to={`/board-0`}>
              Preview
            </Link>
          </div>
        </div>
      </span>
    </motion.div>
  );
});
export default Project;
