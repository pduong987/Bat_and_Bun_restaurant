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

const invoiceTotal = subtotal(placeholderItems);

const CartTable = () => {
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
  )
}

export default CartTable;
