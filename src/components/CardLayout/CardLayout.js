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
import { editCard } from "../../store/actions";
import { getCardDetails, getInEditMode } from "./store";

import "./styles/_cardLayout.scss";

const CardLayout = ({ card, listID, index }) => {
  const cardList = useSelector(getCardDetails);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: card.id,
  });
  const [tempInfo, setRowInfo] = useState();
  const dispatch = useDispatch();

  const closeForm = (e) => {
    setInEditMode({ ...inEditMode, status: false });
  };

  const handleChange = (e) => {
    /*setText(e.target.value);*/
  };

  const saveCard = (e) => {
    e.preventDefault();
    dispatch(editCard(card.id, listID));

    setInEditMode({ ...inEditMode, status: false });
  };

  const TopBar = () => (
    <div className="cardLayout__topbar">
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

  return (
    <ErrorBoundary>
      <Draggable draggableId={String(card.id)} index={index}>
        {(provided) => (
          <div
            className="cardLayout"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            onDoubleClick={() => setInEditMode({ ...inEditMode, status: true })}
          >
            <TopBar />
            <Participants />
            <CardDescription card={card} />
            <CardTags card={card} />
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
};

export default CardLayout;
