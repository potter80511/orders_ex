import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { loadOrders } from 'src/features/orders/actions/ordersAction';

const OrdersContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  return <div>orders</div>
};

export default OrdersContainer;
