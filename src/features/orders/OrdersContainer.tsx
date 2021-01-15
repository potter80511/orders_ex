import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadOrders } from 'src/features/orders/actions/ordersAction';
import { inProgressOrdersSelector, fulFilledOrdersSelector } from 'src/features/orders/selectors';

import OrdersBlock from 'src/features/orders/components/OrdersBlock';
import 'src/scss/features/OrdersContainer.scss';

const OrdersContainer = () => {
  const dispatch = useDispatch();

  const inProgressOrders = useSelector(inProgressOrdersSelector);
  const fulFilledOrders = useSelector(fulFilledOrdersSelector);

  console.log(inProgressOrders, fulFilledOrders)

  useEffect(() => {
    dispatch(loadOrders());
  }, []);

  return (
    <div id="orders-container">
      <div className="orders-area">
        <OrdersBlock
          orders={inProgressOrders}
          ordersStatus="進行中"
        />
        <OrdersBlock
          orders={fulFilledOrders}
          ordersStatus="已完成"
        />
      </div>
    </div>
  );
};

export default OrdersContainer;
