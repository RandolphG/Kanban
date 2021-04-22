import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import TrelloForm from "./TrelloForm";
import { editCard, deleteCard } from "../store/actions";
import { connect } from "react-redux";
import TrelloButton from "./TrelloButton";

const Card = React.memo(({ card, listID, index, dispatch }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setText] = useState(card.title);

  const saveCard = (e) => {
    e.preventDefault();

    dispatch(editCard(card.id, listID));
    setIsEditing(false);
  };

  const closeForm = (e) => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleDeleteCard = (e) => {
    console.log(listID);
    dispatch(deleteCard(card.id, listID));
  };

  const renderEditForm = () => {
    return (
      <TrelloForm text={cardText} onChange={handleChange} closeForm={closeForm}>
        <TrelloButton onClick={saveCard}>Save</TrelloButton>
      </TrelloForm>
    );
  };

  console.log(`CARD : --->`, card);

  const renderCard = () => {
    return (
      <Draggable draggableId={String(card.id)} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <div>
              <div onMouseDown={() => setIsEditing(true)}>edit</div>
              <div
                style={{ background: "red", margin: "1rem 0" }}
                onMouseDown={handleDeleteCard}
              >
                delete
              </div>

              <div>
                <div>{card.title}</div>
                <div>{card.assignee}</div>
                <div>{card.reporter}</div>
                <div>
                  {card.tags.map((tag, idx) => (
                    <p key={idx}>{tag}</p>
                  ))}
                </div>
                <div>{card.description}</div>
              </div>
            </div>
          </div>
        )}
      </Draggable>
    );
  };

  return isEditing ? renderEditForm() : renderCard();
});

export default connect()(Card);
