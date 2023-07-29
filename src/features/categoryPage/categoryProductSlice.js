import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchCategoryProducts = createAsyncThunk(
  "categoryProducts/fetch",
  async (cId) => {
    const url = `/category-products/${cId}`;
    const res = await axios.get(url);
    return res.data;
  }
);

export const filterCategoryProducts = createAsyncThunk(
  "categoryProducts/filter",
  async (url) => {
    const res = await axios.get(url);
    return res.data;
  }
);

const categoryProductSlice = createSlice({
  name: "categoryProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategoryProducts.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchCategoryProducts.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    });
    builder.addCase(fetchCategoryProducts.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
    builder.addCase(filterCategoryProducts.fulfilled, (state, action) => {
      return {
        loading: false,
        products: action.payload,
      };
    });
    builder.addCase(filterCategoryProducts.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
  },
});

export default categoryProductSlice.reducer;
