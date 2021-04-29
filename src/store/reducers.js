import { add, remove } from "../utils";

export const reducers = {
  onAddNotification: (state, action) => {
    const message = action.payload.message;

    return {
      ...state,
      notifications: add(state.notifications, message),
    };
  },
  onRemoveNotification: (state, action) => {
    return {
      ...state,
      notifications: remove(state.notifications, action.payload),
    };
  },
};
