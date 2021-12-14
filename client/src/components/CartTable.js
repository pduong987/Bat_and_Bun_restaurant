import { useContext } from 'react';
import {
  Button,
  IconButton,
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {
  placeholderItems,
  ccyFormat,
  subtotal
} from '../utils/cartOrderUtils';
import {
  CART_ADD,
  CART_REMOVE
} from '../reducers/constants';
import { CartContext } from '../contexts/CartContext';

const invoiceTotal = subtotal(placeholderItems);

const CartTable = () => {
  const { cartItems, dispatch } = useContext(CartContext);

  return (
    cartItems.length > 0
    ? (
      <TableContainer className="cart-table">
        <Table sx={{ maxWidth: 900 }} aria-label="cart details">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell align="center">Qty</TableCell>
              <TableCell align="right">Subtotal</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.name}>
                <TableCell colSpan={1}>
                  {item.name}
                  <Button
                    color="error"
                    sx={{display: 'block', fontSize: '.8em', padding: '0', minWidth: '0', marginTop: '.5em'}}
                    onClick={() => dispatch({type: CART_REMOVE, payload: item})}
                  >
                    Delete
                  </Button>
                </TableCell>
                <TableCell align="center">
                  {item.qty > 1
                  ? (
                      <IconButton
                        aria-label="reduce quantity"
                        className="min-btn"
                        onClick={() => dispatch({type: CART_ADD, payload: {name: item.name, qty: -1}})}
                      >
                        <RemoveIcon />
                      </IconButton>
                    )
                  : (
                      <span style={{display: 'inline-block', width: '40px', height: '20px'}}></span>
                    )
                  }
                  <span style={{display: 'inline-block', width: '50px', textAlign: 'center'}}>{item.qty}</span>
                  <IconButton
                    aria-label="add quantity"
                    className="add-btn"
                    onClick={() => dispatch({type: CART_ADD, payload: {name: item.name, qty: 1}})}
                  >
                    <AddIcon />
                  </IconButton>  
                </TableCell>
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
    : (
      <Container><h4 style={{textAlign: 'center'}}>Your cart is empty. Try adding some items.</h4></Container>
    )
  )
}

export default CartTable;
