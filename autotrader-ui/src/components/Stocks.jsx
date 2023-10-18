import { Component } from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Stocks extends Component {
  render() {
    return (
      <Row>
        <hr></hr>
        <Row>
          <Col>Stock</Col>
          <Col>Bid</Col>
          <Col>Ask</Col>
        </Row>
        {this.props.quotes.map((quote) => (
          <Row key={quote.symbol}>
            <Col>{quote.symbol}</Col>
            <Col>{quote.bid}</Col>
            <Col>{quote.ask}</Col>
          </Row>
        ))}
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  quotes: state.stocks.quotes,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
