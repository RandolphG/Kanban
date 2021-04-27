export const reducers = {
  add: (state, action) => {
    const { title, id, board } = action.payload;

    const newList = {
      title: title,
      id: `list-${id}`,
      cards: [],
      board: board.activeBoard,
    };

    return { ...state, [`list-${id}`]: newList };
  },
  remove: (state, action) => {
    const { listID } = action.payload;
    const newState = state;
    delete newState[listID];
    // return newState;
  },
  addCardToList: (state, action) => {
    const { listID, id } = action.payload;
    const newCardID = `card-${id}`;
    const list = state[listID];
    list.cards = [...list.cards, newCardID];
  },
  dragList: (state, action) => {
    const { source, destination, type } = action.payload;

    /* dragging lists around - the boardReducer should handle this */
    if (type === "list") {
      console.log(`\ntype === "list"`);
      return state;
    }

    /* in the same list */
    if (source.droppableId === destination.droppableId) {
      console.log(`\ndroppableIdStart === droppableIdEnd`);

      const list = state[source.droppableId];
      const card = list.cards.splice(destination.index, 1);
      list.cards.splice(source.index, 0, ...card);
      /*return { ...state, [source.droppableId]: list };*/
    }

    /* other list */
    if (source.droppableId !== destination.droppableId) {
      /* find the list where the drag happened */
      const listStart = state[source.droppableId];

      /* pull out the card from this list*/
      const card = listStart.cards.splice(destination.index, 1);

      /* find the list where the drag ended */
      const listEnd = state[destination.droppableId];

      /* put the card in the new list */
      listEnd.cards.splice(source.index, 0, ...card);
      /*return {
        ...state,
        [source.droppableId]: listStart,
        [destination.droppableId]: listEnd,
      };*/
    }
    return state;
  },
  deleteCardFromList: (state, action) => {
    const { listID, card } = action.payload;
    const newState = state;
    const list = newState[listID];
    const newCards = list.cards.filter((cardID) => cardID !== card.id);

    list.cards = newCards;
  },
  editListTitle: (state, action) => {
    const { listID, listTitle } = action.payload;
    const list = state[listID];

    list.title = listTitle;
  },
};
