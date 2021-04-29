import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { getCardDetails, getTags, setAllTags } from "../../../CardLayout";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const cards = useSelector(getCardDetails);
  const tags = useSelector(getTags);
  const state = true;

  /*
    const uniqueTags = Object.entries(cards).reduce((set, [cardId, card]) => {
    card.tags.forEach((tag) => set.add(tag));
    return set;
  }, new Set());
  */

  const uniqueTags = Array.from(
    Object.entries(cards).reduce((set, [cardId, card]) => {
      card.tags.forEach((tag) => set.add(tag));
      return set;
    }, new Set())
  );

  useEffect(() => {
    dispatch(setAllTags({ uniqueTags }));
  }, []);

  return (
    <AnimatePresence>
      {state ? (
        <motion.div className="control-panel">
          <div className="control-panel__container">
            <div className="tags-input">
              <ul id="tags">
                {tags.map((value, index) => (
                  <li className="tag" key={index}>
                    <span className="tag-title">{value}</span>
                    <span
                      className="tag-close-icon"
                      onClick={() => {
                        // handleRemove(value);
                      }}
                    >
                      &times;
                    </span>
                  </li>
                ))}
              </ul>
              <span className="control-panel__container_button">Done</span>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default FilterPanel;
