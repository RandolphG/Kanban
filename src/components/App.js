import React, { PureComponent } from "react";
import { connect } from "react-redux";
import TrelloCreate from "./TrelloCreate";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Routes from "../routes";
import { sort } from "../store/actions";

class App extends PureComponent {
  render() {
    return <Routes />;
  }
}

export default App;
