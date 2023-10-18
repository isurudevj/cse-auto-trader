import { configureStore } from "@reduxjs/toolkit";
import stocks from "./stocks";

export default function configure() {
  return configureStore({
    reducer: {
      stocks,
    },
  });
}
