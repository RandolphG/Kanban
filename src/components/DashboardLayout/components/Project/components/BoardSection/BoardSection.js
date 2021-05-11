import { Nothing } from "../index";
import React from "react";
import ListCarousel from "./ListCarousel";

const BoardSection = ({ boards, boardID, lists }) => {
  return (
    <span className="projects_link_info_container_section">
      {boards[boardID].lists.length
        ? ListCarousel({ boards, boardID, lists })
        : Nothing()}
    </span>
  );
};

export default BoardSection;
