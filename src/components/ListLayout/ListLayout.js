import React, { useState } from "react";
import "./styles/_listLayout.scss";
import TrelloCreate from "./components/TrelloCreate";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from "react-redux";
import { editTitle, deleteList } from "../../store/actions";
import { CardLayout } from "../CardLayout";

const StyledInput = styled.input`
  width: 100%;
  border: none;
  outline-color: blue;
  border-radius: 3px;
  margin-bottom: 3px;
  padding: 5px;
`;

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
                  {isEditing ? (
                    renderEditTitleInput()
                  ) : (
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
                  )}
                </div>
                <div {...provided.droppableProps} ref={provided.innerRef}>
                  {cards.map((card, index) => (
                    <CardLayout
                      key={card.id}
                      card={card}
                      index={index}
                      listID={listID}
                    />
                  ))}
                  {provided.placeholder}
                  <TrelloCreate listID={listID} />
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default connect()(ListLayout);
