import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Typography,
  TextField,
  Button
} from '@mui/material';
import axios from 'axios';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import HeroBanner from '../components/HomeView/HeroBanner';

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let navigate = useNavigate();
  const heroImageUrl = "./img/about-hero-image.jpg";

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('/users/login', {
      email,
      password
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(function (response) {
      const { data } = response;
      
      // If login successful, redirect to dashboard
      if (data.idToken) {
        navigate('/dashboard');
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <div id="LoginView">
      <HeroBanner imgUrl={heroImageUrl} />
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em' }}>Log In</Typography>
        <div className="login-form">
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              variant="standard"
              label="Email address"
              name="email"
              fullWidth
              margin="normal"
              required
              onChange={e => setEmail(e.target.value)}
            />
            <TextField
              variant="standard"
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              required
              onChange={e => setPassword(e.target.value)}
            />
            
            <Button
              type="submit"
              color="primary"
              variant="contained"
              margin="normal"
              endIcon={<KeyboardArrowRightIcon />}
            >
              Login
            </Button>
          </form>
        </div>
      </Container>
    </div>
  )
}

export default LoginView;
