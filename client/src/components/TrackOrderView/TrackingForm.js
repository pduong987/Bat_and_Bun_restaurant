import React, { useState } from 'react';
import {
  Alert,
  TextField,
  Button
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const TrackingForm = ({ setTrackResult }) => {
  const [orderReference, setOrderReference] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      console.log(orderReference, phone);
      // await trackOrder(orderReference, phone);

      setTrackResult('test');
    } catch (err) {
      setError("Error tracking the order.");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Show error */}
      {error && <Alert severity="error">{error}</Alert>}

      <div className="tracking-form">
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <TextField
            variant="standard"
            label="Order reference"
            name="orderReference"
            fullWidth
            margin="normal"
            required
            onChange={e => setOrderReference(e.target.value)}
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
    </>
  )
}

export default TrackingForm;
