import React from "react";
import styled from "styled-components";
import Textarea from "react-textarea-autosize";

const Container = styled.div`
  width: 284px;
  margin-bottom: 8px;
`;

const StyledTextArea = styled(Textarea)`
  resize: none;
  width: 100%;
  overflow: hidden;
  outline: none;
  border: none;
`;

const ButtonContainer = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

const Form = React.memo(
  ({ list, text = "", onChange, closeForm, children }) => {
    const placeholder = list
      ? "Enter list title..."
      : "Enter a title for this card...";

    const handleFocus = (e) => {
      e.target.select();
    };

    return (
      <Container>
        <div>
          <StyledTextArea
            placeholder={placeholder}
            autoFocus
            onFocus={handleFocus}
            value={text}
            onChange={(e) => onChange(e)}
            onBlur={closeForm}
          />
        </div>
        <ButtonContainer>
          {children}
          <div onMouseDown={closeForm}>close</div>
        </ButtonContainer>
      </Container>
    );
  }
);

export default Form;
