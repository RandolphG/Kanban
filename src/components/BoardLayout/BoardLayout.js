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
import { FilterPanel, AddListButton } from "./components";
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
  const board = boards[boardID];

  const show = useSelector(getFilterPanel);
  const filteredCards = useSelector(getFilteredCards);

  useEffect(() => {
    dispatch(setActiveBoard(boardID));
  }, []);

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

  const Topbar = () => (
    <div className="boardLayout__container_topbar">
      <h2>{board.title}</h2>
      <h2
        onClick={() => {
          dispatch(showFilterPanel());
        }}
      >
        filter
      </h2>
      <Link to="/dashboard">Go Back</Link>
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
      </div>
    </DragDropContext>
  );
};

export default BoardLayout;
