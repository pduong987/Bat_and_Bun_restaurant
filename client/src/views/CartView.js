import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Button
} from '@mui/material';
import CartTable from '../components/CartTable';

const CartView = () => {
  return (
    <div id="CartView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em', textAlign: 'center' }}>Cart</Typography>
      </Container>

      <CartTable />

      <Container className="cart-buttons">
        <Button variant="outlined" component={Link} to="/">Continue Shopping</Button>
        <Button variant="contained" component={Link} to="/order-confirmation">Place Order</Button>
      </Container>
    </div>
  )
}

export default CartView;
