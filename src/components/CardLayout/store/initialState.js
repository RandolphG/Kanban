import { v4 as uuid } from "uuid";

export const initialState = {
  tags: [],
  cards: {
    "card-0": {
      id: `card-${uuid()}`,
      key: uuid(),
      list: "list-0",
      title: "#1 develop ideas",
      description: "brainstorm the things that should happen...",
      tags: ["brainstorm", "develop", "plan", "prototype", "debugging"],
      reporter: "Randolph",
      assignee: "Anton",
    },
    "card-1": {
      id: `card-${uuid()}`,
      key: uuid(),
      list: "list-0",
      title: "#2 develop ideas",
      description: "brainstorm the things that should happen...",
      tags: ["brainstorm", "develop", "plan", "prototype", "debugging"],
      reporter: "Randolph",
      assignee: "Anton",
    },
    "card-2": {
      id: `card-${uuid()}`,
      key: uuid(),
      list: "list-1",
      title: "#3 develop ideas",
      description: "brainstorm the things that should happen...",
      tags: ["brainstorm", "plan", "prototype"],
      reporter: "Randolph",
      assignee: "Anton",
    },
    "card-3": {
      id: `card-${uuid()}`,
      key: uuid(),
      list: "list-1",
      title: "#3 develop ideas",
      description: "brainstorm the things that should happen...",
      tags: ["brainstorm", "plan", "prototype"],
      reporter: "Randolph",
      assignee: "Anton",
    },
  },
  tempInfo: {},
  inEditMode: { status: false, rowKey: null },
};
