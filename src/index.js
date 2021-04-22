import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { store } from "./store";

let persistor = persistStore(store);

const GlobalStyle = createGlobalStyle`
  html {
    background-color: orange;
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div>
        <GlobalStyle />
        <App />
      </div>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
