import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
  name: "storeSlice",
  initialState: null,
  reducers: {
    fetchData: (action) => action.payload,
  },
});

export const { fetchData } = storeSlice.actions;

export default storeSlice;
