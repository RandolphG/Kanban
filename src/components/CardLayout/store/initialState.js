import { v4 as uuid } from "uuid";

export const initialState = {
  tags: [],
  details: [
    {
      id: `card-0`,
      key: "1",
      list: "list-0",
      title: "#1 develop ideas",
      description: "brainstorm the things that should happen...",
      tags: ["brainstorm", "develop", "plan", "prototype", "debugging"],
      reporter: "Randolph",
      assignee: "Anton",
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
    },
  ],
  tempInfo: {},
  inEditMode: { status: false, rowKey: null },
};
