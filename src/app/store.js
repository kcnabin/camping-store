import { configureStore } from "@reduxjs/toolkit";
import randomProductReducer from "../features/indexPage/randomProductSlice";
import categoryProductReducer from "../features/categoryPage/categoryProductSlice";
import cartSliceReducer from "../features/cart/cartSlice";
import allOrdersReducer from "../features/admin/allOrders/allOrdersSlice";

const store = configureStore({
  reducer: {
    randomProducts: randomProductReducer,
    categoryProducts: categoryProductReducer,
    cart: cartSliceReducer,
    allOrders: allOrdersReducer,
  },
});

export default store;
