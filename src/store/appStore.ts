import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slices/storeSlice";
import skuSlice from "./slices/skuSlice";

const appStore = configureStore({
  reducer: {
    store: storeSlice,
    sku: skuSlice
  },
});

export default appStore;
