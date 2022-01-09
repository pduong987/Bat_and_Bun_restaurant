import React, { useState } from 'react';

import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';

function CheckoutForm({ name, email, price, paymentResult }) {
    const [isProcessing, setProcessingTo] = useState(false);
    const [checkoutError, setCheckoutError] = useState();

    const stripe = useStripe();
    const elements = useElements();

    const handleFormSubmit = async (ev) => {
        ev.preventDefault();

        const billingDetails = {
            name: name,
            email: email,
        };

        /**
         * Overview
         *
         * To make payments with Stripe we need to do a bunch of stuff
         *
         * 1. Hide the pay button until the stripe connection is ready
         * 2. Create a payment intent so we can get that stripe secret key
         * 3. Create a payment method to connect billing details to transaction
         * 4. Finally confirm payment
         */

        // Step 1: Hide elements
        setProcessingTo(true);

        // Step 2: Create payment intent
        const paymentIntentReq = await axios.post('/payments/payment_intents', {
            amount: price * 100,
        });

        const cardElement = elements.getElement(CardElement);

        // Step 3: Create payment method

        const paymentMethodReq = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
            billing_details: billingDetails,
        });

        if (!paymentMethodReq.error) {
            //Step 4: Confirm card paymeny
            const confirmedCardPayment = await stripe.confirmCardPayment(
                paymentIntentReq.data.clientSecret,
                {
                    payment_method: paymentMethodReq.paymentMethod.id,
                }
            );

            if (!confirmedCardPayment.error) {
                paymentResult(true, 'Payment successful!');
            } else {
                paymentResult(false, paymentMethodReq.error.message);
            }
        } else {
            paymentResult(false, paymentMethodReq.error.message);
        }
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
