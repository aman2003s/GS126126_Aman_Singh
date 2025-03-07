import { createSlice } from "@reduxjs/toolkit";

const planningSlice = createSlice({
  name: "planningSlice",
  initialState: null,
  reducers: {
    fetchData: (action) => action.payload,
  },
});

export const { fetchData } = planningSlice.actions;

export default planningSlice;
