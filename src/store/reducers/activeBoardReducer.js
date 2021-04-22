import { CONSTANTS } from "../actions";

const initialState = null;

const activeBoardReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.SET_ACTIVE_BOARD: {
      return action.payload;
    }

    default:
      return state;
  }
};

export default activeBoardReducer;

/*
import { createSlice } from "@reduxjs/toolkit";

console.log(`activeBoardReducer init`);

const initialState = null;

export const activeBoardSlice = createSlice({
  name: "activeBoard",
  initialState,
  reducers: {
    setActiveBoard: (state, action) => {
      return action.payload;
    },
  },
});

export const { setActiveBoard } = activeBoardSlice.actions;

export const onSetActiveBoard = (id) => (dispatch) => {
  dispatch(setActiveBoard(id));
};

export default activeBoardSlice.reducer;
*/
