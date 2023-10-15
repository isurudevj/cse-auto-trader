import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Stocks from "./components/Stocks";

const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <Stocks></Stocks>
    </Provider>
  );
}

export default App;
