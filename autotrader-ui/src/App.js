import "./App.css";
import Stocks from "./components/Stocks";
import React from "react";
import { Stomp } from "@stomp/stompjs";
import { connect } from "react-redux";
import { stocksUpdated } from "./store//stocks";

let url = "ws://localhost:2134/cse-autotrader";
let client = Stomp.client(url);
client.debug = function (str) {};
client.heartbeat.outgoing = 1000;
client.heartbeat.incoming = 1000;
client.reconnect_delay = 1000;

class App extends React.Component {
  componentDidMount() {
    console.log("Component mounted !!!");
    client.connect({}, (frame) => {
      client.subscribe("/topic/quotes", (message) => {
        let quotes = JSON.parse(message.body);
        this.props.stockUpdated(quotes.quotes);
      });
    });
  }

  componentWillUnmount() {
    client.disconnect(() => console.log("Disconnected !!!"));
  }

  render() {
    return <Stocks></Stocks>;
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  stockUpdated: (quotes) => dispatch(stocksUpdated(quotes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
