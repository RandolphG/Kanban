import React from "react";
import styled from "styled-components";

const OpenForm = ({ children, onClick }) => {
  const buttonTextOpacity = 1;
  const buttonTextColor = "white";
  const buttonTextBackground = "rgba(0,0,0,.15)";

  const OpenFormButton = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    height: 36px;
    margin-left: 8px;
    width: 300px;
    padding-left: 10px;
    padding-right: 10px;
    opacity: ${buttonTextOpacity};
    color: ${buttonTextColor};
    background-color: ${buttonTextBackground};
  `;

  return (
    <OpenFormButton onClick={onClick}>
      <div>add</div>
      <p style={{ flexShrink: 0 }}>{children}</p>
    </OpenFormButton>
  );
};

export default OpenForm;
