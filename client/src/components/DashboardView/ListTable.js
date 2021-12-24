import React from 'react';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import { ccyFormat } from '../../utils/cartOrderUtils';

const ListTable = ({ items }) => {
  return (
    <TableContainer className="cart-table">
      <Table sx={{ maxWidth: 900 }} aria-label="cart details">
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.name}>
              <TableCell colSpan={1}>
                <span
                  style={{display: 'block', width: '100%'}}
                >
                  {item.name}
                </span>
                {/*deleteFromCart &&
                  (<Button
                    color="error"
                    sx={{display: 'block', fontSize: '.8em', padding: '0', minWidth: '0', marginTop: '.5em'}}
                    onClick={() => deleteFromCart(item)}
                  >
                    Delete
                  </Button>)
                  */}
                  <Button
                    color="primary"
                    sx={{display: 'inline-block', fontSize: '.8em', padding: '0', minWidth: '0', marginTop: '.5em', marginRight: '15px'}}
                  >
                    Edit
                  </Button>
                  <Button
                    color="error"
                    sx={{display: 'inline-block', fontSize: '.8em', padding: '0', minWidth: '0', marginTop: '.5em'}}
                  >
                    Delete
                  </Button>
              </TableCell>
              <TableCell align="right" sx={{verticalAlign: 'top'}}>${ccyFormat(item.price)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default ListTable;
