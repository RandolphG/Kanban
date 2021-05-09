import { Project } from "../Project";
import React from "react";

/**
 * Rendering of boards on dashboard
 * @param singleRefs
 * @param boards
 * @param boardOrder
 * @param draggableArea
 * @param dragging
 * @param stopDragging
 * @param startDragging
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
              />
            );
          })}
      </div>
    </div>
  );
};

export default RenderBoards;
