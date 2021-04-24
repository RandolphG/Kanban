export const reducers = {
  addBoard: (state, action) => {
    console.log(`REDUCER action.payload`, action.payload);
    return [...state, `board-${action.payload.id}`];
  },
};
