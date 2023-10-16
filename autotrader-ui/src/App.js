import "./App.css";
import Stocks from "./components/Stocks";
import React from "react";
import { Stomp } from "@stomp/stompjs";

let url = "ws://localhost:2134/cse-autotrader";
let client = Stomp.client(url);

class App extends React.Component {
  componentDidMount() {
    client.connect({}, (frame) => {
      console.log(frame);
    });
  }

  componentWillUnmount() {}

  render() {
    return <Stocks></Stocks>;
  }
}

export default App;
