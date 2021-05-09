import React, { useEffect, useRef } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Link, useParams } from "react-router-dom";
import { getList, ListLayout, dragList } from "../ListLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  dragBoard,
  getBoards,
  getFilterPanel,
  setActiveBoard,
  showFilterPanel,
} from "./store";
import { getCardDetails, getFilteredCards } from "../CardLayout";
import { AddListButton } from "./components";
import { FilterPanel } from "../Common";
import { motion, useCycle } from "framer-motion";
import { boardLayout } from "./motionSettings";
import "./styles/_boardLayout.scss";

const BoardLayout = () => {
  let mouseDown = false;
  let startX, scrollLeft;
  const draggableArea = useRef();
  const dispatch = useDispatch();
  const lists = useSelector(getList);
  const card = useSelector(getCardDetails);
  const boards = useSelector(getBoards);
  const { boardID } = useParams();
  const show = useSelector(getFilterPanel);
  const filteredCards = useSelector(getFilteredCards);
  const board = boards[boardID];
  const [isOpen, toggleOpen] = useCycle(false, true);

  function onDragEnd(result) {
    const { destination, source, draggableId, type } = result;
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
    if (show) {
      return list.cards.map((cardID) => filteredCards[cardID]);
    } else {
      return list.cards.map((cardID) => card[cardID]);
    }
  }

  function startDragging(e) {
    mouseDown = true;
    startX = e.pageX - draggableArea.current.offsetLeft;
    scrollLeft = draggableArea.current.scrollLeft;
  }

  function stopDragging(e) {
    mouseDown = false;
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

  const ModalBackButtonSvg = () => (
    <Link style={{ width: "32px", color: "black" }} to="/dashboard">
      <svg
        viewBox="0 0 16 16"
        fill="none"
        role="presentation"
        focusable="false"
      >
        <path
          d="M0 12.782c0 .85.1 1.65.3 2.45.1.45.35.45.5 0 1.05-2.65 2.75-5.15 5.55-5.65H8v2.2c0 1 .6 1.3 1.3.7l6.4-5.5c.35-.3.35-.8 0-1.15L9.3.332c-.7-.65-1.3-.3-1.3.65v2.35c-4.8.8-8 4.7-8 9.45z"
          fill="currentColor"
        />
      </svg>
    </Link>
  );

  const Topbar = () => (
    <div className="boardLayout__container_topbar">
      <h2>{board.title}</h2>
      <h2
        onClick={() => {
          toggleOpen();
          dispatch(showFilterPanel());
        }}
      >
        filter
      </h2>
      {ModalBackButtonSvg()}
    </div>
  );

  nothingToRender();

  useEffect(() => {
    dispatch(setActiveBoard(boardID));
  }, []);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <motion.div
        {...boardLayout}
        key="board"
        className="boardLayout"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <FilterPanel isOpen={isOpen} toggle={toggleOpen} />
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
                        const cards = getCardOrder(list);

                        return (
                          <ListLayout
                            list={list}
                            key={list.id}
                            cards={cards}
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
      </motion.div>
    </DragDropContext>
  );
};

export default BoardLayout;
