import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slices/storeSlice";

const appStore = configureStore({
  reducer: {
    store: storeSlice
  },
});

export default appStore;
