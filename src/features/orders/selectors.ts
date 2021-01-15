import { StoreState } from 'src/store';
import { createSelector } from 'reselect';

export const getOrders = createSelector(
  (state: StoreState) => state.orders,
  orders => orders,
);

export const loadingSelector = createSelector(
  getOrders,
  ({ loading }) => loading,
);

export const inProgressOrdersSelector = createSelector(
  getOrders,
  ({ orders }) => {
    return orders.filter(o => {
      const { status: { code } } = o;
      return code === 1 || 2;
    });
  },
);

export const fulFilledOrdersSelector = createSelector(
  getOrders,
  ({ orders }) => {
    return orders.filter(o => {
      const { status: { code } } = o;
      return code === 3 || 4;
    });
  },
);
