import React, { Fragment } from "react";
import TagInput from "./TagInputs";
import { useState } from "react";
import ExampleList from "./ExampleList";

// example project data
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
    title: "Tic Tac Toe",
    description: "A command-line Tic Tac Toe game written in Ruby",
    tags: ["ruby", "game", "cli"],
  },
  {
    title: "TodoList",
    description: "Full stack todo-list written in fullstack Javascript",
    tags: [
      "react",
      "javascript",
      "node",
      "fullstack",
      "front-end",
      "back-end",
      "web",
      "mvc",
    ],
  },
  {
    title: "Weather",
    description: "A Weather Test with React Native ",
    tags: [
      "react",
      "javascript",
      "react-native",
      "front-end",
      "mobile",
      "android",
      "ios",
    ],
  },
  {
    title: "Markdown Editor",
    description: "Markdown Editor powered by Monaco and React",
    tags: ["react", "javascript", "monaco", "front-end"],
  },
  {
    title: "Bloggie",
    description: "Rails-powered blog with a React front-end",
    tags: [
      "react",
      "javascript",
      "ruby",
      "front-end",
      "back-end",
      "fullstack",
      "ruby-on-rails",
      "mvc",
    ],
  },
];

const Test = () => {
  const [tags, setTags] = useState(["game"]);

  const handleTagChange = (tags) => {
    setTags(tags);
  };

  const handleListTagClick = (tag) => {
    setTags([...this.state.tags, tag]);
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

export default Test;
