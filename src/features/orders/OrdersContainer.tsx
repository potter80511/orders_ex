import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { loadOrders } from 'src/features/orders/actions/ordersAction';

import OrdersBlock from 'src/features/orders/components/OrdersBlock';
import 'src/scss/features/OrdersContainer.scss';

const OrdersContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  return (
    <div id="orders-container">
      <div className="orders-area">
        <OrdersBlock/>
        <OrdersBlock/>
      </div>
    </div>
  );
};

export default OrdersContainer;
