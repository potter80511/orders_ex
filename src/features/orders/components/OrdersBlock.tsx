import React from 'react';
import LineOrder from 'src/features/orders/components/LineOrder';
import { Order } from 'src/features/orders/domain/model/Order';

type OrdersBlockProps = {
  ordersStatus: string;
  orders: Order[];
};

const OrdersBlock = (props: OrdersBlockProps) => {
  const {
    ordersStatus,
    orders,
  } = props;

  return (
    <div className="orders-block">
      <div className="orders-head">
        <span>{ordersStatus}</span>
      </div>
      {orders.map(o => {
        const {
          logo,
          status,
          date,
          name,
        } = o;
        return <LineOrder logo={logo} status={status} date={date} name={name} />
      })}
    </div>
  );
};

export default OrdersBlock;
