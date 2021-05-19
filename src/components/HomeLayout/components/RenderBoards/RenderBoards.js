import { Project } from "../Project";
import React from "react";
import "./styles/_renderBoards.scss";
/**
 * Rendering of boards on dashboard
 * @param singleRefs
 * @param boards
 * @param boardOrder
 * @param draggableArea
 * @param dragging
 * @param stopDragging
 * @param startDragging
 * @param match
 * @param location
 * @returns {JSX.Element}
 * @constructor
 */
const RenderBoards = ({
  singleRefs,
  boards,
  boardOrder,
  draggableArea,
  dragging,
  stopDragging,
  startDragging,
  match,
  location,
}) => {
  return (
    <div className="projectDragContainer">
      <div
        className="projectDragContainer_area "
        onMouseDown={startDragging}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={dragging}
        ref={draggableArea}
      >
        {singleRefs &&
          boardOrder &&
          boardOrder.map((boardID, index) => {
            const board = boards[boardID];

            return (
              <Project
                ref={singleRefs}
                key={index}
                {...board}
                boardID={boardID}
                index={index}
                match={match}
                location={location}
              />
            );
          })}
      </div>
    </div>
  );
};

export default RenderBoards;
