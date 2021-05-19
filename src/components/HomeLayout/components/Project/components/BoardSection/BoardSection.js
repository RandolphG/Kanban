import { Nothing } from "../index";
import React from "react";
import ListCarousel from "./ListCarousel";
import { useSelector } from "react-redux";
import { getList } from "../../../../../ListLayout";
import { getBoards } from "../../../../../BoardLayout";

const BoardSection = ({ boardID }) => {
  const lists = useSelector(getList);
  const boards = useSelector(getBoards);

  return (
    <span className="projects_link_info_container_section">
      {boards[boardID].lists.length
        ? ListCarousel({ boards, boardID, lists })
        : Nothing()}
    </span>
  );
};

export default BoardSection;
