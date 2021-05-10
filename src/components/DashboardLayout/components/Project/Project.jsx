import React, { forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { getBoards } from "../../../BoardLayout";
import { getList } from "../../../ListLayout";
import { projectsAnim } from "./motionSettings";
import {
  Description,
  GoToBoards,
  Image,
  Lists,
  Nothing,
  OptionsSvg,
} from "./components";
import "./styles/_projects.scss";

/* TODO
    Resolve deleting issue regarding the Intersection Observer
    Add the image the Link
    Add hover animation to scale image
    Resolve scrolling to end all the time issue
*/

/**
 * Project frame
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<{readonly index?: *, readonly title?: *, readonly boardID?: *}> & React.RefAttributes<unknown>>}
 */
const Project = forwardRef(({ title, boardID, index }, ref) => {
  const dispatch = useDispatch();
  const boards = useSelector(getBoards);
  const lists = useSelector(getList);

  function deleteBoard() {
    // dispatch(removeBoard({ boardID }));
    // dispatch(remove({ boardID }));
  }

  function setReferences(element) {
    if (ref && ref.current) {
      ref.current[index] = element;
    }
  }

  useEffect(() => {
    if (ref && ref.current) {
      ref.current[index].scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, []);

  const BoardSection = ({ boards, boardID, lists }) => (
    <span className="projects_link_info_container_section">
      {boards[boardID].lists.length
        ? boards[boardID].lists.map((item, idx) => Lists({ lists, item, idx }))
        : Nothing()}
    </span>
  );

  const Tags = () => (
    <span className="tags">
      {[0, 1, 2, 3, 4].map((i, idx) => (
        <span key={idx} className="tags_tag">
          tag : {i}
        </span>
      ))}
    </span>
  );

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
            <span className="projects_link_info_container_section">
              {boards[boardID].lists.length
                ? boards[boardID].lists.map((item, idx) =>
                    Lists({ lists, item, idx })
                  )
                : Nothing()}
            </span>
            {/*{Tags()}*/}
            {/*{Description()}*/}
            {GoToBoards({ boardID })}
          </div>
        </div>
      </span>
    </motion.div>
  );
});

export default Project;
