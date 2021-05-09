import React, { useState } from "react";
import { filterResults } from "../../../CardLayout";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
};

/**
 * Individual filtering tags
 * @param index
 * @param value
 * @returns {JSX.Element}
 * @constructor
 */
const Tag = ({ index, value }) => {
  const dispatch = useDispatch();
  const [on, setCloseButton] = useState({ flag: false });

  function clicked() {
    setCloseButton({ flag: !on });
  }

  function filter() {
    clicked();
    dispatch(filterResults({ value }));
  }

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="tag"
      key={index}
      onClick={filter}
    >
      <span className="tag-close-icon">&#10003;</span>
      <span className="tag-title">{value}</span>
    </motion.li>
  );
};

export default Tag;
