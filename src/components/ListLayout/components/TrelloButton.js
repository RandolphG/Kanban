import React from "react";
import styled from "styled-components";

const TrelloButton = ({ children, onClick }) => {
  return <button onMouseDown={onClick}>{children}</button>;
};

export default TrelloButton;
