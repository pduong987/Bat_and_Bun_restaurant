import { Link } from 'react-router-dom';
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button
} from '@mui/material';

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function priceRow(qty, unit) {
  return qty * unit;
}

function createRow(desc, qty, unit) {
  const price = priceRow(qty, unit);
  return { desc, qty, unit, price };
}

function subtotal(items) {
  return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
}

const placeholderItems = [
  createRow('Food Item Name 1', 1, 12.75),
  createRow('Drink Item Name 1', 3, 3.50),
  createRow('Food Item Name 2', 2, 5.00),
];

const invoiceTotal = subtotal(placeholderItems);

const CartView = () => {
  return (
    <div id="CartView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em', textAlign: 'center' }}>Cart</Typography>
      </Container>

      <TableContainer className="cart-table">
        <Table sx={{ maxWidth: 900 }} aria-label="cart details">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {placeholderItems.map((row) => (
              <TableRow key={row.desc}>
                <TableCell>{row.desc}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                <TableCell align="right">${ccyFormat(row.price)}</TableCell>
              </TableRow>
            ))}

            <TableRow>
              <TableCell colSpan={2} align="left" sx={{ fontSize: '1.05em', fontWeight: '700'}}>Total</TableCell>
              <TableCell align="right" sx={{ fontSize: '1.05em', fontWeight: '700'}}>${ccyFormat(invoiceTotal)}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Container className="cart-buttons">
        <Button variant="outlined" component={Link} to="/">Continue Shopping</Button>
        <Button variant="contained" component={Link} to="/order-confirmation">Place Order</Button>
      </Container>
    </div>
  )
}

export default CartView;
