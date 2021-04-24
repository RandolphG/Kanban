import React, { useEffect } from "react";
import { ListLayout } from "../ListLayout";
import { useDispatch, useSelector } from "react-redux";
import TrelloCreate from "../ListLayout/components/TrelloCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { setActiveBoard, sort } from "../../store/actions";

import { Link, useParams } from "react-router-dom";

const BoardLayout = () => {
  const dispatch = useDispatch();
  const lists = ["list-0"];
  const cards = ["card-0", "card-1"];
  const boards = ["board-0"];
  const { boardID } = useParams();
  const board = boards[boardID];

  // const board = boards[boardID];
  // const lists = useSelector(getList);
  // const cards = useSelector(getCard);
  // const boards = useSelector(getBoard);

  useEffect(() => {
    dispatch(setActiveBoard(boardID));
  });

  function onDragEnd(result) {
    const { destination, source, draggableId, type } = result;
    dispatch(setActiveBoard(boardID));

    if (!destination) {
      return;
    }

    dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
      )
    );
  }

  function getListOrder(list) {
    return list.cards.map((cardID) => cards[cardID]);
  }

  // const listOrder = board.lists;

  const listOrder = ["list-0", "list-1"];

  const nothingToRender = () => {
    if (!board) {
      return <p>Board not found</p>;
    }
  };

  nothingToRender();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Link to="/">Go Back</Link>
      {/*<h2>{board.title}</h2>*/}
      <h2>Title</h2>
      <Droppable droppableId="all-lists" direction="horizontal" type="list">
        {(provided) => (
          <div
            style={{ background: "green", display: "flex" }}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {listOrder &&
              listOrder.map((listID, index) => {
                const list = lists[listID];
                if (list) {
                  const listCards = getListOrder(list);

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
            <TrelloCreate list />
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardLayout;
