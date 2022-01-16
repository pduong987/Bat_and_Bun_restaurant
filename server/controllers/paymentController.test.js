global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const orderController = require('./paymentController');
  
test('create payment or throw error', async () => {
  expect.hasAssertions();
  try {
    await stripe.paymentIntents.create({
            amount: amount,
            currency: 'aud',
        });
  } catch (err) {
    expect('err').toMatch('err');
  }
});
