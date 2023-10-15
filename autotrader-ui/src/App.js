import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Stocks from "./components/Stocks";
import React from "react";

const store = configureStore();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Stocks></Stocks>
      </Provider>
    );
  }
}

export default App;
