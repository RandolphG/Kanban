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

  const handleNewTag = (tags) => {
    if (onNewTag) {
      onNewTag(tags);
    }
    if (onTagChange) {
      onTagChange(tags);
    }
  };

  const handleInputChange = (e) => {
    const input = e.target.value === "," ? "" : e.target.value;
    console.log(input);
    setInputValue(input);
  };

  const notDuplicate = (tags, newTag) => {
    return !tags.includes(newTag) || allowDuplicates;
  };

  const addTag = (tag) => {
    if (notDuplicate(filterTags, tag)) {
      setTags([...filterTags, tag]);
      setInputValue("");
      handleNewTag(filterTags);
    }
  };

  const deleteTag = (index, callback) => {
    let tags = filterTags.slice();

    tags.splice(index, 1);
    setTags(tags);

    if (callback) callback();
  };

  const handleTagDelete = (index, e) => {
    deleteTag(index, () => {
      onTagChange(filterTags);
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
        if (value && notDuplicate(filterTags, value)) {
          addTag(value);
        } else {
          setInputValue("");
        }
        break;
      case "Backspace":
        if (!value) {
          handleTagDelete(filterTags.length - 1);
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
