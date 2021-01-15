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

  const inProgress = code === 1 || code === 2;
  const progressClass = inProgress ? 'in-progress' : 'fulfilled'
  return (
    <div className="line-order">
      <div className="order-photo"><img src={logo} /></div>
      <div className="order-info">
        <div className="info-head">
          <span className={`order-status ${progressClass}`}>{type}</span>
          {inProgress && (
            <span className="shipping-date">預計出貨：{date}</span>
          )}
        </div>
        <h3 className="order-name">{name}</h3>
      </div>
    </div>
  );
};

export default LineOrder;
