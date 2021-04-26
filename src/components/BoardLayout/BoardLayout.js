import React, { useEffect } from "react";
import { getList, ListLayout } from "../ListLayout";
import { useDispatch, useSelector } from "react-redux";
import AddListButton from "./components/AddListButton";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { dragBoard, getBoards, setActiveBoard } from "./store";
import { Link, useParams } from "react-router-dom";
import { getCardDetails } from "../CardLayout";
import { dragList } from "../ListLayout/store/list";

const BoardLayout = () => {
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
    dispatch(setActiveBoard(boardID));

    /*
    console.log(
      `BOARD_ID`,
      boardID,
      `\ndestination,`,
      destination,
      `\ndraggableId`,
      draggableId,
      `\ntype`,
      type,
      `\nsource`,
      source,

      `\ntype`,
      type
    );
*/

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

  const listOrder = board.lists;

  const nothingToRender = () => {
    if (!board) {
      return <p>Board not found</p>;
    }
  };

  nothingToRender();

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Link to="/">Go Back</Link>
      <h2>{board.title}</h2>
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
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default BoardLayout;
