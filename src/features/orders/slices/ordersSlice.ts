import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadOrders } from "src/features/orders/actions/ordersAction";
import { Order } from "src/features/orders/domain/model/Order";

export type State = {
  orders: Order[];
  loading: boolean;
};

export type CaseReducer = {};

const ordersSlice = createSlice<State, CaseReducer>({
  name: 'orders',
  initialState: {
    orders: [],
    loading: false,
  },
  reducers: {},
  extraReducers: {
    [loadOrders.pending.toString()]: (state) => {
      state.loading = true;
    },
    [loadOrders.fulfilled.toString()]: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
      state.loading = false;
    },
  },
});

// export const {
//   joinRoom,
//   readyGame,
//   startGame,
//   changePlayer,
//   setShowGameScreen,
//   setIsReadyToStart,
//   setGameOver,
// } = ordersSlice.actions;

export default ordersSlice.reducer;
