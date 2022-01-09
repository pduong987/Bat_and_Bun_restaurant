const express = require('express');
const router = express.Router();
const { createPaymentIntent } = require('../controllers/paymentController');

const { protect } = require('../middleware/authMiddleware');

router.route('/payment_intents').post(createPaymentIntent);

module.exports = router;
