import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import cardsReducer from "./reducers/cardsReducer";
import card from "../components/CardLayout/store/card";
import board from "../components/BoardLayout/store/board";
import dashboard from "../components/DashboardLayout/store/dashboard";
import list from "../components/ListLayout/store/list";

const reducers = combineReducers({
  cards: cardsReducer,
  board,
  dashboard,
  card,
  list,
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
