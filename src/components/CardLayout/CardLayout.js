import React from "react";
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
import "./styles/_cardLayout.scss";
import { useSelector } from "react-redux";
import { getFilterPanel } from "../BoardLayout";

const CardLayout = React.memo(({ card, listID, index }) => {
  const show = useSelector(getFilterPanel);

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

  console.log(`this is the show value`, show);

  return (
    <ErrorBoundary>
      <Draggable draggableId={String(card.id)} index={index}>
        {(provided) => (
          <div
            className="cardLayout"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            // style={{ "--display-none": card.display }}
          >
            <TopBar />
            <Participants />
            <CardDescription card={card} />
            <CardTags index={index} card={card} />
          </div>
        )}
      </Draggable>
    </ErrorBoundary>
  );
});

export default CardLayout;
