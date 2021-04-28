export const reducers = {
  addListToBoard: (state, action) => {
    const { board: boardID, id } = action.payload;
    const newListID = `list-${id}`;
    const board = state[boardID.activeBoard];

    board.lists = [...board.lists, newListID];
  },
  deleteListFromBoard: (state, action) => {
    const { listID, board: boardID } = action.payload;

    const board = state[boardID.activeBoard];
    const lists = board.lists;

    const newLists = lists.filter((id) => id !== listID);

    board.lists = newLists;
  },
  dragBoard: (state, action) => {
    const { boardID, source, destination, type } = action.payload;
    const board = state[boardID];
    const lists = board.lists;

    /* dragging lists around */
    if (type === "list") {
      const pulledOutList = lists.splice(destination.index, 1);
      lists.splice(source.index, 0, ...pulledOutList);

      board.lists = lists;

      // return { ...state, [boardID]: board };
    }
    return state;
  },
  addBoardDetails: (state, action) => {
    const { title, id } = action.payload;
    const newID = `board-${id}`;

    const newBoard = {
      id: newID,
      lists: [],
      title,
    };

    return { ...state, [newID]: newBoard };
  },
  setActiveBoard: (state, action) => {
    return { ...state, activeBoard: action.payload };
  },
};
