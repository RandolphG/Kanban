import React, { useEffect, useState } from "react";
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

const FilterPanel = () => {
  const dispatch = useDispatch();
  const cards = useSelector(getCardDetails);
  const tags = useSelector(getTags);
  const show = useSelector(getFilterPanel);
  const filteredCards = useSelector(getFilteredCards);
  const filter = useSelector(getFilter);

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
    const [on, setCloseButton] = useState({ flag: false });

    const clicked = () => {
      setCloseButton({ flag: !on });
    };

    return (
      <li
        onClick={() => {
          clicked();
          dispatch(filterResults({ value }));
        }}
        className="tag"
        key={index}
      >
        <span className="tag-title">{value}</span>
        {on.value && <span className="tag-close-icon">&times;</span>}
      </li>
    );
  };

  useEffect(() => {
    const uniqueTags = Array.from(
      Object.entries(cards).reduce((set, [cardId, card]) => {
        card.tags.forEach((tag) => set.add(tag));
        return set;
      }, new Set())
    );

    dispatch(setAllTags({ uniqueTags }));
  }, [cards]);

  return (
    <AnimatePresence>
      {show ? (
        <div className="filterBackground">
          <motion.div className="filter-panel">
            <div className="filter-panel__container">
              <div className="tags-input">
                <ul id="tags">
                  {tags.map((value, index) => (
                    <Tag key={index} index={index} value={value} />
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};

export default FilterPanel;
