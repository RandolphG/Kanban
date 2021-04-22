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
import "./styles/_cardLayout.scss";

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
    </ErrorBoundary>
  );
};

export default CardLayout;