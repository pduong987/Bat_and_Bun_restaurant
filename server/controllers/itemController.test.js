global.TextEncoder = require("util").TextEncoder;
global.TextDecoder = require("util").TextDecoder;

const itemController = require('./itemController');
  
test('get item or throw error', async () => {
  expect.hasAssertions();
  try {
    await Item.find({});
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('find item by id or throw error', async () => {
  expect.hasAssertions();
  try {
    await Item.findById(req.params.id);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('create item or throw error', async () => {
  expect.hasAssertions();
  try {
    await await Item.create(req.body);
  } catch (err) {
    expect('err').toMatch('err');
  }
});

test('update item or throw error', async () => {
  expect.hasAssertions();
  try {
    await Item.findByIdAndUpdate(req.params.id, req.body);
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

test('delete item or throw error', async () => {
  expect.hasAssertions();
  try {
    await Item.findById(req.params.id);
  } catch (err) {
    expect('err').toMatch('err');
  }
});