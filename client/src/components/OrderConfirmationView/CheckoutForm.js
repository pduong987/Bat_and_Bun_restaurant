import React, { useState } from 'react';

import { CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

function CheckoutForm({ name, email, price, onSuccessfulCheckout }) {
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();

        const billingDetails = {
            name: name,
            email: email,
        };

        // Create a payment intent and get a client secret
        const { data: clientSecret } = await axios.post(
            '/payments/payment_intents',
            {
                amount: price * 100,
            }
        );

        console.log(clientSecret);

        console.log('Handling payment...');
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <CardElement></CardElement>
            </form>
        </div>
    );
}

export default CheckoutForm;
