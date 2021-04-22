import React from "react";
import { useSelector } from "react-redux";
import { getCards } from "../../store/selector";
import ErrorBoundary from "../../ErrorBoundary";
import CardActionButtons from "./CardActionButtons";
import CardReporter from "./CardReporter";
import CardTitle from "./CardTitle";
import CardDescription from "./CardDescription";
import CardAssignee from "./CardAssignee";
import CardTags from "./CardTags";

const CardLayout = ({ card }) => {
  const cardInfo = useSelector(getCards);

  console.log(`CARD_LAYOUT CURRENT INFO --->`, cardInfo[card.id]);

  return (
    <ErrorBoundary>
      <div style={{ border: "2px solid black", padding: ".5rem" }}>
        <span>CardLayout</span>
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
