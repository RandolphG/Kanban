import React, { useEffect, useRef, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Link, useParams } from "react-router-dom";
import { getList, ListLayout, dragList } from "../ListLayout";
import { useDispatch, useSelector } from "react-redux";
import { dragBoard, getBoards, setActiveBoard } from "./store";
import { getCardDetails } from "../CardLayout";
import { FilterPanel, AddListButton } from "./components";
import "./styles/_boardLayout.scss";

const BoardLayout = () => {
  const refX = useRef(null);
  const refY = useRef(null);
  const [scrollState, setScrollState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
    clientY: 0,
    scrollY: 0,
  });

  const dispatch = useDispatch();
  const lists = useSelector(getList);
  const card = useSelector(getCardDetails);
  const boards = useSelector(getBoards);
  const { boardID } = useParams();
  const board = boards[boardID];

  useEffect(() => {
    dispatch(setActiveBoard(boardID));
  }, []);

  function onDragEnd(result) {
    const { destination, source, draggableId, type } = result;
    console.log(`result`, result);
    dispatch(setActiveBoard(boardID));

    if (!destination) {
      return;
    }

    dispatch(
      dragBoard({
        source,
        destination,
        draggableId,
        type,
        boardID,
      })
    );

    dispatch(
      dragList({
        source,
        destination,
        draggableId,
        type,
        boardID,
      })
    );
  }

  function getCardOrder(list) {
    return list.cards.map((cardID) => card[cardID]);
  }

  let mouseDown = false;
  let startX, scrollLeft;

  const draggableArea = useRef();

  function startDragging(e) {
    mouseDown = true;
    startX = e.pageX - draggableArea.current.offsetLeft;
    scrollLeft = draggableArea.current.scrollLeft;
    console.log(
      `startDragging() --> event:`,
      e,
      `\nstartX`,
      startX,
      `\nscrollLeft`,
      scrollLeft
    );
  }

  function stopDragging(e) {
    mouseDown = false;
    console.log(`stopDragging() --> event:`, e);
  }

  function dragging(e) {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    const x = e.pageX - draggableArea.current.offsetLeft;
    const scroll = x - startX;
    draggableArea.current.scrollLeft = scrollLeft - scroll;
  }

  const listOrder = board.lists;

  const nothingToRender = () => {
    if (!board) {
      return <p>Board not found</p>;
    }
  };

  const Topbar = () => (
    <div className="boardLayout__container_topbar">
      <h2>{board.title}</h2>
      <Link to="/">Go Back</Link>
    </div>
  );

  nothingToRender();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="boardLayout">
        <FilterPanel />
        <div className="boardLayout__container">
          {Topbar()}
          <Droppable droppableId="all-lists" direction="horizontal" type="list">
            {(provided) => (
              <div
                ref={draggableArea}
                className="boardLayout__container__draggable-area"
                onMouseDown={startDragging}
                onMouseUp={stopDragging}
                onMouseLeave={stopDragging}
                onMouseMove={dragging}
              >
                <div
                  className="boardLayout__container__draggable-area_boards"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {listOrder &&
                    listOrder.map((listID, index) => {
                      const list = lists[listID];
                      if (list) {
                        const listCards = getCardOrder(list);
                        return (
                          <ListLayout
                            listID={list.id}
                            key={list.id}
                            title={list.title}
                            cards={listCards}
                            index={index}
                          />
                        );
                      }
                    })}
                  {provided.placeholder}
                  <AddListButton list />
                </div>
              </div>
            )}
          </Droppable>
        </div>
      </div>
    </DragDropContext>
  );
};

export default BoardLayout;
