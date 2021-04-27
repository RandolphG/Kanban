import React, { useState } from "react";
import Button from "./Button";
import { useDispatch } from "react-redux";
// import { addList } from "../store/actions";
import Form from "./Form";
import { addList } from "../../ListLayout";

const AddListButton = () => {
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

  function handleAddList() {
    if (text) {
      setText("");
      dispatch(addList(text));
    }
  }

  return formOpen ? (
    <Form text={text} onChange={handleInputChange} closeForm={closeForm}>
      <Button onClick={handleAddList}>{"Add List"}</Button>
    </Form>
  ) : (
    <button className="addListButton" onClick={openForm}>
      {"Add another list"}
    </button>
  );
};

export default AddListButton;
