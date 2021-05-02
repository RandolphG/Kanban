import React, { Fragment } from "react";
import TagInput from "./TagInputs";
import { useState } from "react";
import ExampleList from "./ExampleList";
import "./style.scss";

const projects = [
  {
    title: "Example 0",
    description:
      "This is an example project item. You can sort through these using the tags. You can also click a tag to add it to the filter.",
    tags: ["react", "javascript", "game", "back-end", "balls"],
  },
  {
    title: "Game of Life",
    description: "React implementation of the game of life.",
    tags: ["react", "javascript", "game", "web", "front-end"],
  },
  {
    title: "Calculator",
    description: "Calculator written in Javascript",
    tags: ["javascript", "utility", "web"],
  },
  {
    title: "Stencil",
    description: "Calculator written in Typescript",
    tags: ["javascript", "utility", "web", "typescript"],
  },
];

const obj = {
  GameOfLife: {
    hide: false,
    title: "Game of Life",
    description: "React implementation of the game of life.",
    tags: ["react", "e-book", "game", "web", "front-end"],
  },
  Calculator: {
    hide: false,
    title: "Calculator",
    description: "Calculator written in Javascript",
    tags: ["javascript", "e-book", "web"],
  },
  Stencil: {
    hide: false,
    title: "Stencil",
    description: "Calculator written in Typescript",
    tags: ["utility", "web", "e-book", "typescript"],
  },
  Pen: {
    hide: false,
    title: "Pen",
    description: "Calculator written in Typescript",
    tags: ["javascript", "web", "typescript"],
  },
  Book: {
    hide: false,
    title: "Book",
    description: "Calculator written in Typescript",
    tags: ["javascript", "utility", "web", "e-book"],
  },
};

const objValues = Object.values(obj);

objValues.forEach(({ tags, hide }, idx) => {
  if (tags.includes("javascript")) {
    return { ...objValues[idx], hide: true };
  }
});

/**
 * filter component
 * @returns {JSX.Element}
 * @constructor
 */
const Filter = () => {
  const [tags, setTags] = useState(["game"]);
  const handleTagChange = (tags) => {
    setTags(tags);
  };

  const handleListTagClick = (tag) => {
    setTags([tags, tag]);
  };

  return (
    <Fragment>
      <TagInput onTagChange={handleTagChange} tags={tags} />
      <ExampleList
        items={projects}
        filter={tags}
        onTagClick={handleListTagClick}
      />
    </Fragment>
  );
};

export default Filter;
