import { AnimatePresence, motion } from "framer-motion";
import { input } from "../motionSettings";
import React from "react";

const variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

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
    <form className="dashboardLayout_container_form" onSubmit={handleSubmit}>
      <input
        className="dashboardLayout_container_form_input"
        onChange={handleChange}
        value={title}
        placeholder="type the name of project..."
        type="text"
      />
    </form>
  );

  const CancelButton = () => (
    <button
      onClick={cancelInput}
      className="dashboardLayout_container_cancelButton"
    >
      Cancel
    </button>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="addBoardInput"
        className="dashboardLayout_container"
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
