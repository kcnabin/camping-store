import { configureStore } from "@reduxjs/toolkit";
import randomProductReducer from "../features/indexPage/randomProductSlice";
import categoryProductReducer from "../features/categoryPage/categoryProductSlice";

const store = configureStore({
  reducer: {
    randomProducts: randomProductReducer,
    categoryProducts: categoryProductReducer,
  },
});

export default store;
