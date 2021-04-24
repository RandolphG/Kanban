import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import card from "../components/CardLayout/store/card";
import listsReducer from "./reducers/listsReducer";
import cardsReducer from "./reducers/cardsReducer";
import boardsReducer from "./reducers/boardsReducer";
import boardOrderReducer from "./reducers/boardOrderReducer";
import activeBoardReducer from "./reducers/activeBoardReducer";
import board from "../components/BoardLayout/store/board";
import dashboard from "../components/DashboardLayout/store/dashboard";

const reducers = combineReducers({
  lists: listsReducer,
  cards: cardsReducer,
  boards: boardsReducer,
  boardOrder: boardOrderReducer,
  activeBoard: activeBoardReducer,
  board,
  dashboard,
  card,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export * from "./selector";
