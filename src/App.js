import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { store } from './store';
import ButtonGroup from './ButtonGroup';
class App extends Component {

  state = store.getState()
  render() {
    return [
      <HelloWorld tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Elm", "React-redux"]} />
    ]
  }
}

export default App;
