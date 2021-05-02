import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import {
  getCardDetails,
  getTags,
  setAllTags,
  filterResults,
} from "../../../CardLayout";
import { getFilterPanel, showFilterPanel } from "../../store";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const cards = useSelector(getCardDetails);
  const tags = useSelector(getTags);
  const show = useSelector(getFilterPanel);

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

  Object.entries(cards).reduce((array, [cardId, card]) => {
    if (card.tags.includes(uniqueTags)) {
      console.log(`included`);
    }
  });

  const Tag = ({ index, value }) => {
    const [on, setOn] = useState(true);

    return (
      <li
        onClick={() => {
          setOn(!on);
          dispatch(filterResults({ value }));
        }}
        className="tag"
        style={{ background: on && "white" }}
        key={index}
      >
        <span className="tag-title">{value}</span>
      </li>
    );
  };

  useEffect(() => {
    dispatch(setAllTags({ uniqueTags }));
  }, [cards]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div className="control-panel">
          <div className="control-panel__container">
            <div className="tags-input">
              <ul id="tags">
                {tags.map((value, index) => (
                  <Tag key={index} index={index} value={value} />
                ))}
              </ul>
              <span
                onClick={() => dispatch(showFilterPanel())}
                className="control-panel__container_button"
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default FilterPanel;
