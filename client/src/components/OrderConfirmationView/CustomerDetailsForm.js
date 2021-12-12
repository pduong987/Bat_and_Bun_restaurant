import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  Alert,
  TextField,
  Button
} from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CustomerDetailsForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      // await placeOrder(name, phone, email, order);

      navigate("/thank-you");
    } catch (err) {
      setError("Error placing the order.");
      console.log(err);
    }

    setLoading(false);
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
