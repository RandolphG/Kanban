import React from "react";
import styled from "styled-components";

const Button = ({ children, onClick }) => {
  return <button onMouseDown={onClick}>{children}</button>;
};

export default Button;
