import React from "react";
import { useDispatch } from "react-redux";

const CardTags = ({ index, tags }) => {
  const dispatch = useDispatch();

  const handleTagAdd = (e) => {
    const { value } = e.target;
    if (tags && !tags.includes(value)) {
      if (e.keyCode === 13 || e.key === "," || e.key === "Enter") {
        let tag = [value.trim().split(",")[0]];
        if (tag.length > 0) {
          dispatch(/*handleKeywordAdd(tag, index)*/);
          e.target.value = "";
        }
      }
    }
  };

  const handleRemove = (tag) => {
    const values = tags.filter((val) => val !== tag);
    dispatch(/*handleTagsRemove(values, index)*/);
  };

  const Input = () => (
    <input
      type="text"
      onKeyUp={(e) => handleTagAdd(e)}
      placeholder="Add more tags..."
      onKeyPress={(e) => e.key === "Enter" && e.preventDefault()}
    />
  );

  const Tags = () => (
    <ul id="tags">
      {tags
        ? tags.map((value, index) => (
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
    </ul>
  );

  return (
    <div className="tags-input">
      {Tags()}
      {Input()}
    </div>
  );
};

export default CardTags;
