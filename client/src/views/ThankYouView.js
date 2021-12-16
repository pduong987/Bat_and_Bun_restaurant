import React from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Typography
} from '@mui/material';

const ThankYouView = () => {
  return (
    <div id="ThankYouView">
      <Container>
        <Typography variant="h1" sx={{ fontSize: '3em', textAlign: 'center' }}>Thank You!</Typography>
        <Typography variant="body1" sx={{ margin: '1em auto', textAlign: 'center' }}>
          Thank you for your order. We will attend to your order as soon as possible. Please keep your <strong>order reference</strong> for <Link to="/track-order">tracking your order</Link>.
        </Typography>
        <Typography variant="h2" sx={{ margin: '1.5em auto 0',fontSize: '1.75em', textAlign: 'center' }}>Your Order Reference</Typography>
        <Typography variant="h3" sx={{ margin: '1em auto', fontSize: '1.5em', textAlign: 'center' }}>#00000</Typography>
      </Container>
    </div>
  )
}

export default ThankYouView;
