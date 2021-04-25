import React from "react";

const Button = ({ children, onClick }) => {
  return <button onMouseDown={onClick}>{children}</button>;
};

export default Button;
