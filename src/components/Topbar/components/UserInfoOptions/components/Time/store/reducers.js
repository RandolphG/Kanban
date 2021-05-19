export const reducers = {
  setDate: (state, action) => {
    const { date } = action.payload;

    return { ...state, date };
  },
};
