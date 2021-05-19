import React, { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { remove } from "../../../BoardLayout";
import { removeBoard } from "../../../DashboardLayout";
import { projectsAnim } from "./motionSettings";
import { Button, Image, BoardSection, OptionsSvg } from "./components";
import "./styles/_projects.scss";

/* TODO
    Resolve deleting issue.
    Resolve scrolling issue.
    Add Tags component.
*/

/**
 * Project frame
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly index?: *, readonly title?: *, readonly boardID?: *}> & React.RefAttributes<unknown>>}
 */
const Project = forwardRef(
  ({ title, boardID, index, match, location }, ref) => {
    const dispatch = useDispatch();

    function deleteBoard() {
      dispatch(removeBoard({ boardID }));
      dispatch(remove({ boardID }));
    }

    function setReferences(element) {
      if (ref && ref.current) {
        ref.current[index] = element;
      }
    }

    const Tags = () => (
      <span className="tags">
        {[0, 1, 2, 3, 4].map((i, idx) => (
          <span key={idx} className="tags_tag">
            tag : {i}
          </span>
        ))}
      </span>
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
        {...projectsAnim}
      >
        <span className="projects_link" key={boardID}>
          <span onClick={deleteBoard} className="projects_link_deleteButton">
            {OptionsSvg()}
          </span>
          {Image({ title })}
          <div className="projects_link_info">
            <div className="projects_link_info_container">
              {BoardSection({ boardID })}
              {Button({ location, boardID })}
            </div>
          </div>
        </span>
      </motion.div>
    );
  }
);

export default Project;
