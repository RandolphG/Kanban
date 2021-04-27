import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { addCard } from "../../../store/actions";
import Form from "./Form";
import OpenForm from "./OpenForm";

const AddCardButton = ({ listID }) => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const [text, setText] = useState("");

  function openForm() {
    setFormOpen(true);
  }

  function closeForm(e) {
    setFormOpen(false);
  }

  function handleInputChange(e) {
    setText(e.target.value);
  }

  function handleAddCard() {
    if (text) {
      setText("");
      dispatch(addCard(listID, text));
    }
  }

  return formOpen ? (
    <Form text={text} onChange={handleInputChange} closeForm={closeForm}>
      <Button onClick={handleAddCard}>{"Add Card"}</Button>
    </Form>
  ) : (
    <OpenForm onClick={openForm}>{"Add another card"}</OpenForm>
  );
};

export default AddCardButton;
