import { useContext } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  placeholderItems,
  ccyFormat,
  subtotal
} from '../utils/cartOrderUtils';
import { CartContext } from '../contexts/CartContext';

const invoiceTotal = subtotal(placeholderItems);

const CartTable = () => {
  const { cartItems } = useContext(CartContext);

  return (
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
          {cartItems.map((item) => (
            <TableRow key={item.name}>
              <TableCell>{item.name}</TableCell>
              <TableCell align="right">{item.qty}</TableCell>
              <TableCell align="right">${ccyFormat(10.00)}</TableCell>
            </TableRow>
          ))}

          <TableRow>
            <TableCell colSpan={2} align="left" sx={{ fontSize: '1.05em', fontWeight: '700'}}>Total</TableCell>
            <TableCell align="right" sx={{ fontSize: '1.05em', fontWeight: '700'}}>${ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default CartTable;
