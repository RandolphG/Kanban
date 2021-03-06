import React from "react";
import { useDispatch } from "react-redux";
import { handleKeywordAdd, handleTagsRemove } from "../store";

const CardTags = ({ index, card }) => {
  const dispatch = useDispatch();

  const handleTagAdd = (e) => {
    const { value } = e.target;
    if (card.tags && !card.tags.includes(value)) {
      if (e.keyCode === 13 || e.key === "," || e.key === "Enter") {
        let tag = [value.trim().split(",")[0]];
        if (tag.length > 0) {
          dispatch(handleKeywordAdd({ tag, index, card }));
          e.target.value = "";
        }
      }
    }
  };

  const handleRemove = (tag) => {
    const values = card.tags.filter((val) => val !== tag);
    dispatch(handleTagsRemove({ values, index, card }));
  };

  const Input = () => (
    <input
      className="tag-input"
      type="text"
      onKeyUp={(e) => handleTagAdd(e)}
      placeholder="Add more tags..."
      onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
    />
  );

  const Tags = () => (
    <ul id="tags">
      {card && card.tags
        ? card.tags.map((value, index) => (
            <li className="tag" key={index}>
              <span className="tag-title">{value}</span>
              <span
                className="tag-close-icon"
                onClick={() => {
                  handleRemove(value);
                }}
              >
                &times;
              </span>
            </li>
          ))
        : null}
      {Input()}
    </ul>
  );

  return <div className="tags-input">{Tags()}</div>;
};

export default CardTags;
