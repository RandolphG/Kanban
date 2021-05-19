export const reducers = {
  setLogoColor: (state, action) => {
    const { color } = action.payload;

    return { ...state, color };
  },
};
