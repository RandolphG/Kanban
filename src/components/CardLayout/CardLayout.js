import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../store";
import ErrorBoundary from "../../ErrorBoundary";
import {
  CardAssignee,
  CardTags,
  CardDescription,
  CardTitle,
  CardActionButtons,
  CardReporter,
} from "./components";
import { deleteCard, editCard } from "../../store/actions";
import "./styles/_cardLayout.scss";
import { Draggable } from "react-beautiful-dnd";

const CardLayout = ({ card, listID, index }) => {
  const dispatch = useDispatch();
  const cardInfo = useSelector(getCards);
  const [isEditing, setIsEditing] = useState(false);

  const closeForm = (e) => {
    setIsEditing(false);
  };

  console.log(`cardInfo`, cardInfo);

  const handleChange = (e) => {
    /*setText(e.target.value);*/
  };

  const handleDeleteCard = (e) => {
    console.log(listID);
    dispatch(deleteCard(card.id, listID));
  };

  const saveCard = (e) => {
    e.preventDefault();

    dispatch(editCard(card.id, listID));
    setIsEditing(false);
  };

  return (
    <ErrorBoundary>
      <Draggable draggableId={String(card.id)} index={index}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setIsEditing(true)}
          >
            <div className="cardLayout">
              <div
                style={{ background: "red", margin: "1rem 0" }}
                onMouseDown={handleDeleteCard}
              >
                delete
              </div>
              <div className="cardLayout__enclosure__top">
                <CardTitle title={card.title} details={card} />
                <CardActionButtons
                  key={card.id}
                  id={card.id}
                  card={card}
                  index={index}
                  listID={listID}
                  details={card}
                />
              </div>
              <CardAssignee assignee={card.assignee} details={card} />
              <CardReporter reporter={card.reporter} details={card} />
              <CardTags tags={card.tags} />
              <CardDescription description={card.description} details={card} />
            </div>
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
};

export default CardLayout;
