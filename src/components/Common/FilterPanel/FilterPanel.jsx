import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  getCardDetails,
  getTags,
  setAllTags,
  filterResults,
  getFilteredCards,
  getFilter,
} from "../../CardLayout";
import { getFilterPanel } from "../../BoardLayout";
import "./styles/_filterPanel.scss";
import { CloseButton, Tag } from "./components";

const variants = {
  open: {
    transition: { staggerChildren: 0.27, delayChildren: 0.7 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

/* TODO convert to React portal instead of zIndex */

/**
 * Filter panel for unique tags
 * @returns {JSX.Element}
 * @constructor
 */
const FilterPanel = ({ isOpen, toggle }) => {
  const dispatch = useDispatch();
  const cards = useSelector(getCardDetails);
  const tags = useSelector(getTags);
  const show = useSelector(getFilterPanel);
  const filteredCards = useSelector(getFilteredCards);
  const filter = useSelector(getFilter);

  useEffect(() => {
    const uniqueTags = Array.from(
      Object.entries(cards).reduce((set, [cardId, card]) => {
        card.tags.forEach((tag) => set.add(tag));
        return set;
      }, new Set())
    );

    dispatch(setAllTags({ uniqueTags }));
  }, [cards]);

  const Tags = () => (
    <div className="tags-input">
      <motion.ul id="tags" variants={variants}>
        {tags.map((value, index) => (
          <Tag key={index} index={index} value={value} />
        ))}
      </motion.ul>
    </div>
  );

  const Labels = () => (
    <div className="filter-panel__elements_label">
      <span className="filter-panel__elements_label_title">
        Filter by category
      </span>
      <span className="filter-panel__elements_label_subtitle">
        {tags.length} tags discovered
      </span>
    </div>
  );

  return (
    <AnimatePresence exitBeforeEnter>
      {isOpen ? (
        <motion.div
          className="filterBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="filter-panel">
            <motion.div
              className="filter-panel__elements"
              initial={{ y: 75, x: 75, opacity: 0 }}
              animate={{ y: 0, x: 0, opacity: 1 }}
              exit={{ y: -50, x: -50, opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {Labels()}
              {Tags()}
              {CloseButton({ toggle })}
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default FilterPanel;
