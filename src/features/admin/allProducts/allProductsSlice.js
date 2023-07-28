import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getTokenHeader } from "../../../helper/getTokenHeader";

const initialState = {
  loading: false,
  data: [],
  error: null,
};

export const loadAllProducts = createAsyncThunk(
  "allProducts/loadAllProducts",
  async (url) => {
    const res = await axios.get(url, getTokenHeader());
    return res.data;
  }
);

export const loadMore = createAsyncThunk(
  "allProducts/loadMore",
  async (url) => {
    const res = await axios.get(url, getTokenHeader());
    return res.data.products;
  }
);

const allProductsSlice = createSlice({
  name: "allProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllProducts.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(loadAllProducts.rejected, (state, action) => {
      return {
        data: [],
        loading: false,
        error: action.error.message,
      };
    });
    builder.addCase(loadAllProducts.fulfilled, (state, action) => {
      return {
        loading: false,
        error: null,
        data: action.payload,
      };
    });

    builder.addCase(loadMore.pending, (state) => {
      return {
        ...state,
        loading: true,
        error: null,
      };
    });
    builder.addCase(loadMore.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
    builder.addCase(loadMore.fulfilled, (state, action) => {
      console.log("action :", action.payload);
      return {
        loading: false,
        error: null,
        data: {
          ...state.data,
          products: [...state.data.products, ...action.payload],
        },
      };
    });
  },
});

export default allProductsSlice.reducer;
