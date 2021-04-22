import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../store/selector";
import ErrorBoundary from "../../ErrorBoundary";
import CardActionButtons from "./CardActionButtons";
import CardReporter from "./CardReporter";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardAssignee from "./CardAssignee";
import CardTags from "./CardTags";
import { deleteCard, editCard } from "../../store/actions";

const CardLayout = ({ card, listID }) => {
  const dispatch = useDispatch();
  const cardInfo = useSelector(getCards);
  const [isEditing, setIsEditing] = useState(false);

  const closeForm = (e) => {
    setIsEditing(false);
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
      <div className="cardLayout">
        <span>CardLayout</span>

        <div
          style={{ background: "red", margin: "1rem 0" }}
          onMouseDown={handleDeleteCard}
        >
          delete
        </div>

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
    </ErrorBoundary>
  );
};

export default CardLayout;
