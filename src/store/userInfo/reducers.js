export const reducers = {
  setName: (state, action) => {
    const { credentials } = action.payload;

    console.log(`ACTION PAYLOAD : credentials -->`, credentials.reporter);
    const newState = { ...state };

    // newState.userName = credentials.reporter;
    return { ...state, userName: credentials.reporter };
  },
};
