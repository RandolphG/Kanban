import React, { Fragment } from "react";
import ExampleListItem from "./ExampleListItem";
import { contains } from "./utils";

const ExampleList = ({ items, filter, onTagClick }) => {
  let filtered = items.filter((item) => contains(item.tags, filter));
  let renderedItems = filtered.map(({ title, description, tags }, index) => (
    <ExampleListItem
      title={title}
      description={description}
      tags={tags}
      onClick={onTagClick}
    />
  ));

  return (
    <Fragment>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          padding: "0px",
          gridGap: "10px",
        }}
      >
        {renderedItems}
      </ul>
    </Fragment>
  );
};

export default ExampleList;
