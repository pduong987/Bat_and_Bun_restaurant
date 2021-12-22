import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../contexts/AuthContext';
import OrderRecord from './OrderRecord';

const AdminOrderList = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('/orders', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${currentUser.accessToken}`
      }
    })
    .then(res => setOrders(res.data))
    .catch(err => console.log(err));
  }, [currentUser.accessToken]);

  return (
    <div>
      <h1>Order List</h1>
      {orders &&
      orders.map((order, i) => (<OrderRecord key={i} order={order} />))}
    </div>
  )
}

export default AdminOrderList;
