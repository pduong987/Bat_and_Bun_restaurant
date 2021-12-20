import React, { useContext, useState } from 'react';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Alert,
  TextField,
  Button
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { subtotal, placeOrder } from '../../utils/cartOrderUtils';
import {
  CART_REMOVE_ALL
} from '../../reducers/constants.js';
import { CartContext } from '../../contexts/CartContext';

const CustomerDetailsForm = ({ cartItems }) => {
  const { dispatch } = useContext(CartContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const totalCost = subtotal(cartItems);

  // const placeOrder = async (order) => {
  //   try {
  //     await axios.post('/orders', order, {
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
  //   } catch (err) {
  //     setError(`Error placing the order. Error: ${err}.`);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    // Generate simple order reference number
    const currentDate = new Date();
    const dd = String(currentDate.getDate()).padStart(2, '0');
    const time = String(currentDate.getTime());
    const genOrderRef = dd + time.substring(time.length - 3) + Math.floor(Math.random() * 9);  // dd000r

    const incomingOrder = {
      orderRef: genOrderRef,
      cartItems: cartItems,
      totalCost: totalCost,
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      orderStatus: "Processing..."
    };

    placeOrder(incomingOrder);

    // localStorage.setItem('cartItems', JSON.stringify([]));
    dispatch({type: CART_REMOVE_ALL, payload: []});
    setLoading(false);
    navigate("/thank-you", { state: genOrderRef });
  };

  return (
    <Container>
      <Typography variant="h2" sx={{ fontSize: '1.75em', textAlign: 'center' }}>Your Details</Typography>
      
      {/* Show error */}
      {error && <Alert severity="error">{error}</Alert>}

      <div className="customer-details-form">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            required
            onChange={e => setName(e.target.value)}
          />
          <TextField
            variant="standard"
            label="Phone number"
            name="phone"
            fullWidth
            margin="normal"
            required
            onChange={e => setPhone(e.target.value)}
          />
          <TextField
            variant="standard"
            label="Email address"
            name="email"
            fullWidth
            margin="normal"
            required
            onChange={e => setEmail(e.target.value)}
          />
          
          <Button
            type="submit"
            color="primary"
            variant="contained"
            margin="normal"
            endIcon={<KeyboardArrowRightIcon />}
            disabled={loading}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default CustomerDetailsForm;
