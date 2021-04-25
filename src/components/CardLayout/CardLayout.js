import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrorBoundary from "../../ErrorBoundary";
import { Draggable } from "react-beautiful-dnd";
import {
  CardAssignee,
  CardTags,
  CardDescription,
  CardTitle,
  CardActionButtons,
  CardReporter,
} from "./components";
import { deleteCard, editCard } from "../../store/actions";
import { getInEditMode } from "./store";
import "./styles/_cardLayout.scss";

const CardLayout = ({ card, listID, index }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const closeForm = (e) => {
    setIsEditing(false);
  };
  const inEditMode = useSelector(getInEditMode);

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

  const TopBar = () => (
    <div className="cardLayout__enclosure__top">
      <CardTitle card={card} />
      <CardActionButtons card={card} index={index} listID={listID} />
    </div>
  );

  const Participants = () => (
    <div className="cardLayout_participants">
      <CardAssignee card={card} />
      <CardReporter card={card} />
    </div>
  );

  console.log(`\nisEditing CardLayout : --> `, isEditing);

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
              <div onMouseDown={handleDeleteCard}>delete</div>
              <TopBar />
              <Participants />
              <CardTags card={card} />
              <CardDescription card={card} />
            </div>
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
};

export default CardLayout;
