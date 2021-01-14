import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import ordersReducer, { State as OrdersState } from "src/features/orders/slices/ordersSlice";

export type StoreState = {
  orders: OrdersState;
}

export default configureStore({
  reducer: {
    orders: ordersReducer,
  },
  devTools: true,
  middleware: [...getDefaultMiddleware()]
});
