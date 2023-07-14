import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

const productPerPage = 6;
export const fetchRandomProducts = createAsyncThunk(
  "randomProducts/fetch",
  () => {
    return axios
      .get(`/products/random/${productPerPage}`)
      .then((res) => res?.data);
  }
);

export const loadMore = createAsyncThunk("/randomProducts/loadMore", () => {
  return axios
    .get(`/products/random/${productPerPage}`)
    .then((res) => res?.data);
});

const randomProductSlice = createSlice({
  name: "randomProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomProducts.pending, (state) => {
      // state.loading = true;
      // state.products = [];
      // state.error = "";
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchRandomProducts.fulfilled, (state, action) => {
      // state.loading = false;
      // state.products = action.payload;
      // state.error = "";
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    });
    builder.addCase(fetchRandomProducts.rejected, (state, action) => {
      // state.loading = false;
      // state.products = [];
      // state.error = action.error.message;
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
    builder.addCase(loadMore.fulfilled, (state, action) => {
      // state.loading = false;
      // state.products = [...state.products, ...action.payload];
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload],
      };
    });
    builder.addCase(loadMore.rejected, (state, action) => {
      // state.error = action.error.message;
      return {
        ...state,
        error: action.error.message,
      };
    });
  },
});

export default randomProductSlice.reducer;
