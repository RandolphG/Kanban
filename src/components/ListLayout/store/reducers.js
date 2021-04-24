export const reducers = {
  setAddList: (state, action) => {
    const { title, id, boardID } = action.payload;
    const newList = {
      title: title,
      id: `list-${id}`,
      cards: [],
      board: boardID,
    };

    const newState = { ...state, [`list-${id}`]: newList };

    return newState;
  },
  addCardToList: (state, action) => {
    const { listID, id } = action.payload;
    const newCardID = `card-${id}`;
    const list = state[listID];
    const newCards = [...list.cards, newCardID];
    list.cards = newCards;
  },
  dragList: (state, action) => {
    const {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexEnd,
      droppableIndexStart,
      type,
    } = action.payload;

    // dragging lists around - the listOrderReducer should handle this
    if (type === "list") {
      console.log(`\ntype === "list"`);
      return state;
    }

    // in the same list
    if (droppableIdStart === droppableIdEnd) {
      console.log(`\ndroppableIdStart === droppableIdEnd`);

      const list = state[droppableIdStart];
      const card = list.cards.splice(droppableIndexStart, 1);
      list.cards.splice(droppableIndexEnd, 0, ...card);
      // return { ...state, [droppableIdStart]: list };
    }

    // other list
    if (droppableIdStart !== droppableIdEnd) {
      console.log(`\ndroppableIdStart !== droppableIdEnd`);
      // find the list where the drag happened
      const listStart = state[droppableIdStart];
      // pull out the card from this list
      const card = listStart.cards.splice(droppableIndexStart, 1);
      // find the list where the drag ended
      const listEnd = state[droppableIdEnd];

      // put the card in the new list
      listEnd.cards.splice(droppableIndexEnd, 0, ...card);
    }
    // return state;
  },
  deleteCardFromList: (state, action) => {
    const { listID, id } = action.payload;
    const newState = state;
    const list = newState[listID];
    const newCards = list.cards.filter((cardID) => cardID !== id);
    list.cards = newCards;
  },
  editListTitle: (state, action) => {
    const { listID, newTitle } = action.payload;

    const list = state[listID];
    list.title = newTitle;
    return { ...state, [listID]: list };
  },
  deleteList: (state, action) => {
    const { listID } = action.payload;
    const newState = state;
    delete newState[listID];
    return newState;
  },
};
