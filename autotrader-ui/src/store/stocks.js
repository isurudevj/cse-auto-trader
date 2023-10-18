import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "stocks",
  initialState: {
    quotes: [
      { symbol: "BNA", bid: 1.23, ask: 1.231 },
      { symbol: "EXPO", bid: 44.23, ask: 45.231 },
    ],
  },
  reducers: {
    stocksUpdated: (stocks, action) => {
      console.log("stock updated", action.payload);
      stocks.quotes = action.payload;
    },
  },
});

export const { stocksUpdated } = slice.actions;

export default slice.reducer;
