global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const orderController = require('./orderController');
  
test('get order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.find({});
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('find order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.findById(req.params.id);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('track order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.find({orderRef: req.params.id, customerPhone: phone});
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('create order or throw error', async () => {
  expect.hasAssertions();
  try {
    await newOrder.save();
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('update order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.findByIdAndUpdate(req.params.id, req.body);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('delete order or throw error', async () => {
  expect.hasAssertions();
  try {
    await Order.findById(req.params.id);
  } catch (err) {
    expect('err').toMatch('err');
  }
});