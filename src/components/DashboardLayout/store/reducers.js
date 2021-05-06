export const reducers = {
  addBoard: (state, action) => {
    const { payload } = action;
    const newKeyValue = `board-${payload}`;

    return [...state, newKeyValue];
  },
  removeBoard: (state, action) => {
    const { boardID } = action.payload;
    const newState = state;
    return newState.filter((val) => val !== boardID);
  },
};
