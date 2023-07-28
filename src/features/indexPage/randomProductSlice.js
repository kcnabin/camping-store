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
  async () => {
    const res = await axios.get(`/products/random/${productPerPage}`);
    return res.data;
  }
);

export const loadMore = createAsyncThunk(
  "randomProducts/loadMore",
  async () => {
    const res = await axios.get(`/products/random/${productPerPage}`);
    return res.data;
  }
);

const randomProductSlice = createSlice({
  name: "randomProducts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRandomProducts.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(fetchRandomProducts.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    });
    builder.addCase(fetchRandomProducts.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
    builder.addCase(loadMore.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        products: [...state.products, ...action.payload],
      };
    });
    builder.addCase(loadMore.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
  },
});

export default randomProductSlice.reducer;
