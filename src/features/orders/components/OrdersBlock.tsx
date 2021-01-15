import React from 'react';
import LineOrder from 'src/features/orders/components/LineOrder';
import { Order } from 'src/features/orders/domain/model/Order';

type OrdersBlockProps = {
  loading: boolean;
  ordersStatus: string;
  orders: Order[];
};

const OrdersBlock = (props: OrdersBlockProps) => {
  const {
    loading,
    ordersStatus,
    orders,
  } = props;

  return (
    <div className="orders-block">
      <div className="orders-head">
        <span>{ordersStatus}</span>
      </div>
      {loading ? (
        <div className="loading">
          <div className="block"><span/></div>
          <div className="block"><span/></div>
        </div>
      ) : (
        <div className="line-orders">
          {orders.map((o, index) => {
            const {
              logo,
              status,
              date,
              name,
            } = o;
            return <LineOrder key={`line-order-${index}`} logo={logo} status={status} date={date} name={name} />
          })}
        </div>
      )}
    </div>
  );
};

export default OrdersBlock;
