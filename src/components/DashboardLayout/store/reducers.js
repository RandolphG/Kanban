export const reducers = {
  addBoard: (state, action) => {
    console.log(`REDUCER action.payload`, action.payload);
    return {
      ...state,
      boardOrder: [...state.boardOrder, `board-${action.payload.id}`],
    };
  },
};
