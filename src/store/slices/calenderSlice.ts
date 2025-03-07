import { createSlice } from "@reduxjs/toolkit";

const calenderSlice = createSlice({
  name: "calenderSlice",
  initialState: null,
  reducers: {
    fetchData: (action) => action.payload,
  },
});

export const { fetchData } = calenderSlice.actions;

export default calenderSlice;
