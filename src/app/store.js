import { configureStore } from "@reduxjs/toolkit";
import randomProductSlice from "../features/indexPage/randomProductSlice";

const store = configureStore({
  reducer: {
    randomProducts: randomProductSlice,
  },
});

export default store;
