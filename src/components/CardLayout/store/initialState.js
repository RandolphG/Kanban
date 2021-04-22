import { v4 as uuid } from "uuid";

export const initialState = {
  allTags: [],
  cardInfo: [
    {
      id: `card-0`,
      key: "1",
      list: "list-0",
      title: "#1 develop ideas",
      description: "brainstorm the things that should happen...",
      tags: ["brainstorm", "develop", "plan", "prototype", "debugging"],
      reporter: "Randolph",
      assignee: "Anton",
      blocked: [1, 2, 3],
    },
    {
      id: `card-1`,
      key: "2",
      list: "list-0",
      title: "#2 develop ideas",
      description: "brainstorm the things that should happen...",
      tags: ["brainstorm", "develop", "plan", "prototype", "debugging"],
      reporter: "Randolph",
      assignee: "Anton",
      blocked: [1, 2, 3],
    },
  ],
  tempInfo: {},
  inEditMode: { status: false, rowKey: null },
  notifications: [],
  controlPanel: false,
};
