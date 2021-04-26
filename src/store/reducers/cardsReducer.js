import { CONSTANTS } from "../actions";

const initialState = {
  "card-0": {
    id: `card-0`,
    key: "1",
    list: "list-0",
    title: "#1 develop ideas",
    description: "brainstorm the things that should happen...",
    tags: ["plan", "prototype", "debugging"],
    reporter: "Randolph",
    assignee: "Anton",
  },
  "card-1": {
    id: `card-1`,
    key: "2",
    list: "list-0",
    title: "#2 more develop ideas",
    description: "brainstorm the things that should happen...",
    tags: ["brainstorm", "develop"],
    reporter: "Randolph",
    assignee: "Anton",
  },
  "card-2": {
    id: `card-2`,
    key: "3",
    list: "list-1",
    title: "#3 more develop ideas",
    description: "brainstorm the things that should happen...",
    tags: ["prototype", "debugging"],
    reporter: "Randolph",
    assignee: "Anton",
  },
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_CARD: {
      const { text, listID, id } = action.payload;

      const newCard = {
        text,
        id: `card-${id}`,
        list: listID,
      };

      return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.EDIT_CARD: {
      const { id, newText } = action.payload;
      const card = state[id];
      card.text = newText;
      return { ...state, [`card-${id}`]: card };
    }

    default:
      return state;
  }
};

export default cardsReducer;
