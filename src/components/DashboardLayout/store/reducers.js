export const reducers = {
  addBoard: (state, action) => {
    const { payload } = action;
    const newKeyValue = `board-${payload}`;

    return [...state, newKeyValue];
  },
};
