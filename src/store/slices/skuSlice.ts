import { createSlice } from "@reduxjs/toolkit";

const skuSlice = createSlice({
  name: "skuSlice",
  initialState: null,
  reducers: {
    fetchData: (action) => action.payload,
  },
});

export const { fetchData } = skuSlice.actions;

export default skuSlice;
