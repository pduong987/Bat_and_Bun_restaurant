import React from 'react';
import {
  Typography
} from '@mui/material';
import CartTable from '../CartTable';

const OrderRecord = ({ order }) => {

  return (
    <div className="order-record">
      <Typography variant="h3" sx={{ fontWeight: '700', fontSize: '1.5em', textAlign: 'center' }}>Order #{order.orderRef}</Typography>
      <div style={{textAlign: 'center'}}>{order.customerName} | ({order.customerEmail}) | Ph: {order.customerPhone}</div>

      <CartTable cartItems={order.cartItems} />
    </div>
  )
}

export default OrderRecord;
