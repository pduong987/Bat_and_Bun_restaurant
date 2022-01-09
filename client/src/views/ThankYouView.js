import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Container, Typography } from '@mui/material';
import CheckoutForm from '../components/OrderConfirmationView/CheckoutForm';

const ThankYouView = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        !state && navigate('/cart');
    }, [state, navigate]);

    return (
        <div id='ThankYouView'>
            <Container>
                <Typography
                    variant='h1'
                    sx={{ fontSize: '3em', textAlign: 'center' }}
                >
                    Thank You!
                </Typography>
                <Typography
                    variant='body1'
                    sx={{ margin: '1em auto', textAlign: 'center' }}
                >
                    Thank you for your order. We will attend to your order as
                    soon as possible. Please keep your{' '}
                    <strong>order reference</strong> for{' '}
                    <Link to='/track-order'>tracking your order</Link>.
                </Typography>
                <Typography
                    variant='h2'
                    sx={{
                        margin: '1.5em auto 0',
                        fontSize: '1.75em',
                        textAlign: 'center',
                    }}
                >
                    Your Order Reference
                </Typography>
                <Typography
                    variant='h3'
                    sx={{
                        margin: '1em auto',
                        fontSize: '1.5em',
                        textAlign: 'center',
                    }}
                >
                    #{state}
                </Typography>
                <div>
                    <CheckoutForm price={100.56} />
                </div>
            </Container>
        </div>
    );
};

export default ThankYouView;
