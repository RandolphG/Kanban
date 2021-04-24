export const reducers = {
  addListToBoard: (state, action) => {
    const { boardID, id } = action.payload;
    const newListID = `list-${id}`;
    const board = state[boardID];
    board.lists = [...board.lists, newListID];
    return { ...state, [boardID]: board };
  },
  dragBoard: (state, action) => {
    const { boardID } = action.payload;
    const board = state[boardID];
    const lists = board.lists;
    const { droppableIndexEnd, droppableIndexStart, type } = action.payload;

    // dragging lists around
    if (type === "list") {
      console.log(`\nboardReducer : "`);
      const pulledOutList = lists.splice(droppableIndexStart, 1);

      console.log(
        `\nboardReducer : lists.splice(droppableIndexStart, 1) "`,
        pulledOutList
      );
      lists.splice(droppableIndexEnd, 0, ...pulledOutList);
      board.lists = lists;

      // return { ...state, [boardID]: board };
    }
    // return state;
  },
  setDeleteList: (state, action) => {
    const { listID, boardID } = action.payload;
    const board = state[boardID];
    const lists = board.lists;
    const newLists = lists.filter((id) => id !== listID);
    board.lists = newLists;
    return { ...state, [boardID]: board };
  },
  setBoardInfo: (state, action) => {
    const { title, id } = action.payload;
    const newID = `board-${id}`;
    const newBoard = {
      id: newID,
      title,
      lists: [],
    };

    return { ...state, [newID]: newBoard };
  },
  setActiveBoard: (state, action) => {
    return { ...state, activeBoard: action.payload };
  },
};
