import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getTokenHeader } from "../../../helper/getTokenHeader";
import { sortByLatest } from "../../../helper/orderSorter";

const initialState = {
  loading: false,
  error: null,
  data: [],
};

export const loadAllOrders = createAsyncThunk(
  "allOrders/loadAllOrders",
  async () => {
    try {
      const url = "/order";
      const res = await axios.get(url, getTokenHeader());
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const loadOrdersByStatus = createAsyncThunk(
  "allOrders/loadOrdersByStatus",
  async (url) => {
    try {
      const res = await axios.get(url, getTokenHeader());
      return res.data;
    } catch (error) {
      return error.message;
    }
  }
);

const allOrdersSlice = createSlice({
  name: "allOrders",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllOrders.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(loadAllOrders.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
    builder.addCase(loadAllOrders.fulfilled, (state, action) => {
      return {
        loading: false,
        error: null,
        data: sortByLatest(action.payload),
      };
    });
    builder.addCase(loadOrdersByStatus.pending, (state) => {
      return {
        ...state,
        loading: true,
      };
    });
    builder.addCase(loadOrdersByStatus.fulfilled, (state, action) => {
      return {
        loading: false,
        data: sortByLatest(action.payload),
        error: null,
      };
    });
    builder.addCase(loadOrdersByStatus.rejected, (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error.message,
      };
    });
  },
});

export default allOrdersSlice.reducer;
