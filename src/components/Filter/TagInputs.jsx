import React, { useState, useEffect } from "react";
import { hasDuplicates } from "./utils";
import TagsList from "./TagList";

const TagInput = ({
  onNewTag,
  onTagChange,
  allowDuplicates,
  hashtag,
  tags,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filterTags, setTags] = useState(tags || []);

  function handleNewTag(tags) {
    if (onNewTag) {
      onNewTag(tags);
    }
    if (onTagChange) {
      onTagChange(tags);
    }
  }

  function handleInputChange(e) {
    const input = e.target.value === "," ? "" : e.target.value;
    console.log(input);
    setInputValue(input);
  }

  const notDuplicate = (tags, newTag) => {
    return !tags.includes(newTag) || allowDuplicates;
  };

  function addTag(tag) {
    if (notDuplicate(filterTags, tag)) {
      setTags([...filterTags, tag]);
      setInputValue("");
      handleNewTag(filterTags);
    }
  }

  function deleteTag(index, callback) {
    let tags = filterTags.slice();
    tags.splice(index, 1);
    setTags(tags);

    if (callback) callback();
  }

  function handleTagDelete(index, e) {
    deleteTag(index, () => {
      onTagChange(filterTags);
    });
  }

  function handleKeyDown(e) {
    let {
      key,
      target: { value },
    } = e;
    switch (key) {
      case "Tab":
      case "Enter":
      case ",":
        if (value) e.preventDefault();
        value = value.trim();
        value && notDuplicate(filterTags, value)
          ? addTag(value)
          : setInputValue("");
        break;
      case "Backspace":
        if (!value) {
          handleTagDelete(filterTags.length - 1);
        }
        break;
    }
  }

  function updateControlledTags(tags) {
    if (tags && !hasDuplicates(tags)) {
      setTags(tags);
      onTagChange(tags);
    }
  }

  useEffect(() => {
    updateControlledTags(filterTags);
    return () => {
      updateControlledTags(filterTags);
    };
  }, [filterTags]);

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
      <TagsList
        tags={filterTags}
        onTagDelete={handleTagDelete}
        hashtag={hashtag}
      />
    </span>
  );
};

export default TagInput;
