import { CONSTANTS } from "../actions";

const initialState = ["board-0"];

const boardOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_BOARD: {
      console.log(`added board-${action.payload.id} `);

      return [...state, `board-${action.payload.id}`];
    }
    default:
      return state;
  }
};

export default boardOrderReducer;
