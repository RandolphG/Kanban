import React, { useState, useEffect } from "react";
import { hasDuplicates } from "./utils";
import TagsList from "./TagList";

const TagInput = ({ onNewTag, onTagChange, allowDuplicates, hashtag }) => {
  const [inputValue, setInputValue] = useState("");
  const [tags, setTags] = useState([]);

  const handleNewTag = (tags) => {
    if (onNewTag) {
      onNewTag(tags);
    }
    if (onTagChange) {
      onTagChange(tags);
    }
  };

  const handleInputChange = ({ target: { value: inputValue } }) => {
    inputValue = inputValue === "," ? "" : inputValue;
    setInputValue(inputValue);
  };

  const notDuplicate = (tags, newTag) => {
    return !tags.includes(newTag) || allowDuplicates;
  };

  const addTag = (tag) => {
    if (notDuplicate(tags, tag)) {
      setTags([...this.state.tags, tag]);
      setInputValue("");
      handleNewTag(tags);
    }
  };

  const deleteTag = (index, callback) => {
    let tags = tags.slice();

    tags.splice(index, 1);
    setTags(tags);

    if (callback) callback();
  };

  const handleTagDelete = (index, e) => {
    deleteTag(index, () => {
      onTagChange(tags);
    });
  };

  const handleKeyDown = (e) => {
    let {
      key,
      target: { value },
    } = e;
    switch (key) {
      case "Tab":
        if (value) e.preventDefault();
      case "Enter":
      case ",":
        value = value.trim();
        if (value && notDuplicate(tags, value)) {
          addTag(value);
        } else {
          setInputValue("");
        }
        break;
      case "Backspace":
        if (!value) {
          handleTagDelete(tags.length - 1);
        }
        break;
    }
  };

  const updateControlledTags = (tags) => {
    if (tags && !hasDuplicates(tags)) {
      setTags(tags);
      onTagChange(tags);
    }
  };

  useEffect(() => {
    updateControlledTags(tags);
    return () => {
      updateControlledTags(tags);
    };
  }, [tags]);

  return (
    <span className="tagInputWrapper">
      <input
        name="tagInput"
        className="tagInput"
        placeholder="Add a Tag and press Enter"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <TagsList tags={tags} onTagDelete={handleTagDelete} hashtag={hashtag} />
    </span>
  );
};

export default TagInput;
