import React from 'react';
import LineOrder from 'src/features/orders/components/LineOrder';

const OrdersBlock = () => {

  return (
    <div className="orders-block">
      <div className="orders-head">
        <span>進行中</span>
      </div>
      <LineOrder/>
      <LineOrder/>
      <LineOrder/>
    </div>
  );
};

export default OrdersBlock;
