import React, { useState } from "react";
import "./styles/_listLayout.scss";
import { AddCardButton } from "./components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { editTitle, deleteList } from "../../store/actions";
import { CardLayout } from "../CardLayout";

const ListLayout = ({ title, cards, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [listTitle, setListTitle] = useState(title);

  const renderEditTitleInput = () => {
    return (
      <form onSubmit={handleFinishEditing}>
        <input
          className="listLayout_section_header_listTitleEditableInput"
          type="text"
          value={listTitle}
          onChange={handleChange}
          autoFocus
          onFocus={handleFocus}
          onBlur={handleFinishEditing}
        />
      </form>
    );
  };

  const handleFocus = (e) => {
    e.target.select();
  };

  const handleChange = (e) => {
    e.preventDefault();
    setListTitle(e.target.value);
  };

  const handleFinishEditing = (e) => {
    setIsEditing(false);
    dispatch(editTitle(listID, listTitle));
  };

  const handleDeleteList = () => {
    dispatch(deleteList(listID));
  };

  const Topbar = () => (
    <div
      className="listLayout_section_header_elements"
      onClick={() => setIsEditing(true)}
    >
      <div className="listLayout_section_header_elements_listTitle">
        {listTitle}
      </div>
      <div
        className="listLayout_section_header_elements_deleteButton"
        onClick={handleDeleteList}
      >
        delete
      </div>
    </div>
  );

  return (
    <Draggable draggableId={String(listID)} index={index}>
      {(provided) => (
        <div
          className="listLayout"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={String(listID)} type="card">
            {(provided) => (
              <div className="listLayout_section">
                <div className="listLayout_section_header">
                  {isEditing ? renderEditTitleInput() : Topbar()}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
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
                  <AddCardButton />
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
