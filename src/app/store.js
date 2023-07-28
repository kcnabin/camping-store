import { configureStore } from "@reduxjs/toolkit";
import randomProductReducer from "../features/indexPage/randomProductSlice";
import categoryProductReducer from "../features/categoryPage/categoryProductSlice";
import cartSliceReducer from "../features/cart/cartSlice";
import allOrdersReducer from "../features/admin/allOrders/allOrdersSlice";
import allProductsReducer from "../features/admin/allProducts/allProductsSlice";

const store = configureStore({
  reducer: {
    randomProducts: randomProductReducer,
    categoryProducts: categoryProductReducer,
    cart: cartSliceReducer,
    allOrders: allOrdersReducer,
    allProducts: allProductsReducer,
  },
});

export default store;
