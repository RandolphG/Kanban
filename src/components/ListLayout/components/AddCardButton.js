import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./Form";
import { addCard } from "../../CardLayout";

const AddCardButton = ({ listID }) => {
  const dispatch = useDispatch();
  const [formOpen, setFormOpen] = useState(false);
  const [titleText, setText] = useState("");

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
    if (titleText) {
      setText("");
      dispatch(addCard({ listID, titleText }));
    }
  }

  return formOpen ? (
    <Form text={titleText} onChange={handleInputChange} closeForm={closeForm}>
      <button onClick={handleAddCard}>{"Add"}</button>
    </Form>
  ) : (
    <button onClick={openForm}>{"Add card"}</button>
  );
};

export default AddCardButton;
