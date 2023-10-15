import { Component } from "react";
import { connect } from "react-redux";

class Stocks extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Stock</th>
            <th>Bid</th>
            <th>Ask</th>
          </tr>
          {this.props.quotes.map((quote) => (
            <tr key={quote.id}>
              <td>{quote.id}</td>
              <td>{quote.bid}</td>
              <td>{quote.ask}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => ({
  quotes: state.stocks.quotes,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Stocks);
