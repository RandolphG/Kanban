import React, { useState } from "react";
import { AddCardButton, renderEditTitleInput, Topbar } from "./components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { CardLayout } from "../CardLayout";
import { deleteList, handleEditTitle } from "./store";
import { useDispatch } from "react-redux";
import { addScrollable, removeScrollable } from "../BoardLayout";
import "./styles/_listLayout.scss";

const ListLayout = ({ cards, list, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(list.title);

  function handleFocus(e) {
    e.target.select();
  }

  function handleChange(e) {
    e.preventDefault();
    setListTitle(e.target.value);
  }

  function handleFinishEditing(e) {
    const listID = list.id;
    setIsEditing(false);
    dispatch(handleEditTitle({ listID, listTitle }));
  }

  function handleDeleteList() {
    const listID = list.id;
    dispatch(deleteList({ listID }));
  }

  const listID = list.id;

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <div
          className="listLayout"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          onMouseOver={() => {
            dispatch(removeScrollable());
          }}
          onMouseOut={() => {
            dispatch(addScrollable());
          }}
        >
          <Droppable droppableId={String(listID)} type="card">
            {(provided) => (
              <div className="listLayout_section">
                <div className="listLayout_section_header">
                  {isEditing
                    ? renderEditTitleInput({
                        listTitle,
                        handleChange,
                        handleFocus,
                        handleFinishEditing,
                      })
                    : Topbar({ listTitle, handleDeleteList, setIsEditing })}
                </div>
                <div
                  className="listLayout_section_cards"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {cards &&
                    cards.map((card, index) => (
                      <CardLayout
                        key={card.id}
                        card={card}
                        index={index}
                        listID={listID}
                      />
                    ))}
                  {provided.placeholder}
                  <AddCardButton listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default ListLayout;
