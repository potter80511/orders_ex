import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "src/api/Fetcher";
import { OrderFactory } from "src/features/orders/factories/OrderFactory";

export const loadOrders = createAsyncThunk(
  'orders/load_orders',
  async (_, thunkAPI) => {
    try {
      const response = await getApi('/orders');
      const { data } = response;
      const result = OrderFactory.createArrayFromNet(data);
      console.log(result)
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
);
