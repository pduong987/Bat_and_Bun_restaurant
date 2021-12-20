import { placeOrder } from '../cartOrderUtils';
import Order from '../../'

const order = {
  orderRef: "123",
  cartItems: [{
    name: "itemname",
    qty: 2,
    price: 5,
    item: { _id: "61b72114b3c622f0ae3bdf3b"}
  }],
  totalCost: 10,
  customerName: "Test Name",
  customerPhone: "0212345678",
  customerEmail: "email@email.com",
  orderStatus: "Processing..."
};

describe("Place Order API", () => {
  test("Should create an order with response of the created order", () => {
    const res = placeOrder(order);
    expect(res).toBe(order);
  });
});
