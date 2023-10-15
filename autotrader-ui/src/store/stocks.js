import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "stocks",
  initialState: {
    quotes: [{ id: "BNA", bid: 1.23, ask: 1.231 }],
  },
  reducers: {
    stocksUpdated: (stocks, action) => {
      stocks.quotes = action.payload;
    },
  },
});

export default slice.reducer;
