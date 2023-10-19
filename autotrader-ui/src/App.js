import "./App.css";
import Stocks from "./components/Stocks";
import React from "react";
import { Stomp } from "@stomp/stompjs";
import { connect } from "react-redux";
import { stocksUpdated } from "./store//stocks";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import PlaceHolder from "./components/PlaceHolder";

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
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="stocks" element={<Stocks />}></Route>
            <Route
              path="make-trade"
              element={<PlaceHolder title="Make Trade" />}
            ></Route>
            <Route path="pnl" element={<PlaceHolder title="PNL" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  stockUpdated: (quotes) => dispatch(stocksUpdated(quotes)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
