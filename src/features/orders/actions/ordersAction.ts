import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "src/api/Fetcher";
// import { RoomFactory } from "domain/factories/RoomFactory";
// import { GamePack } from "domain/models/Room";

export const loadOrders = createAsyncThunk(
  'orders/load_orders',
  async (_, thunkAPI) => {
    try {
      const response = await getApi('/orders');
      // return RoomFactory.createArrayFromNet(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message })
    }
  }
);
