import React from 'react';
import { Status } from 'src/features/orders/domain/model/Order';

type LineOrderProps = {
  logo: string;
  status: Status;
  date: string;
  name: string;
};

const LineOrder = (props: LineOrderProps) => {
  const {
    logo,
    status: { type, code },
    date,
    name,
  } = props;
  return (
    <div className="line-order">
      <div className="order-photo"><img src={logo} /></div>
      <div className="order-info">
        <div className="info-head">
          <span className="order-status">{type}</span>
          {code === 1 || code === 2 && (
            <span className="shipping-date">預計出貨：{date}</span>
          )}
        </div>
        <h3 className="order-name">{name}</h3>
      </div>
    </div>
  );
};

export default LineOrder;
