import { configureStore } from "@reduxjs/toolkit";
import storeSlice from "./slices/storeSlice";
import skuSlice from "./slices/skuSlice";
import planningSlice from "./slices/planningSlice";
import calenderSlice from "./slices/calenderSlice";

const appStore = configureStore({
  reducer: {
    store: storeSlice,
    sku: skuSlice,
    planning: planningSlice,
    calender: calenderSlice,
  },
});

export default appStore;
