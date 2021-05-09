import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { input } from "./motionSettings";
import { variants } from "./motionSettings";
import "./styles/_addBoardInput.scss";

const AddBoardInput = ({
  title,
  handleSubmit,
  handleChange,
  toggleOpen,
  isOpen,
  setTitle,
}) => {
  function cancelInput() {
    toggleOpen();
    setTitle("");
  }

  const InputField = () => (
    <form className="addBoardInput_form" onSubmit={handleSubmit}>
      <input
        className="addBoardInput_form_input"
        onChange={handleChange}
        value={title}
        placeholder="type the name of project..."
        type="text"
      />
    </form>
  );

  const CancelButton = () => (
    <button onClick={cancelInput} className="addBoardInput_cancelButton">
      Cancel
    </button>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        className="addBoardInput"
        key="addBoardInput"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={variants}
      >
        {InputField()}
        {CancelButton()}
      </motion.div>
    </AnimatePresence>
  );
};

export default AddBoardInput;
