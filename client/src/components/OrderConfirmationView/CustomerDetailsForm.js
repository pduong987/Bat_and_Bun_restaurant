import React, { useState, useReducer } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Alert,
  TextField,
  Button
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { subtotal } from '../../utils/cartOrderUtils';
import {
  ORDER_SUCCESS,
  ORDER_FAIL
} from '../../reducers/constants';
import { orderReducer } from '../../reducers/orderReducer';

const CustomerDetailsForm = ({ cartItems }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const totalCost = subtotal(cartItems);
  const [orders, dispatch] = useReducer(orderReducer, []);

  const placeOrder = async (order) => {
    try {
      const { data } = await axios.post('/orders', order, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      dispatch({ type: ORDER_SUCCESS, payload: data });
    } catch (err) {
      setError("Error placing the order.");
      dispatch({ type: ORDER_FAIL, payload: err.message });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    const incomingOrder = {
      cartItems: cartItems,
      totalCost: totalCost,
      customerName: name,
      customerPhone: phone,
      customerEmail: email,
      orderStatus: "Processing..."
    };
    
    placeOrder(incomingOrder);

    console.log(orders);
    
    console.log(error);
    localStorage.removeItem('cartItems');
    setLoading(false);
    navigate("/thank-you");
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
