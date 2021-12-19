import Order from "../models/orderModel.js";

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

const getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    const phone = req.query.phone;

    if (order.customerDetails.phone === phone) {
      res.json(order);
    } else {
      res.status(404);
    }
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

const createOrder = async (req, res) => {
  try {
    // Generate simple order reference number
    const genOrderRef = new Date().getTime() + (Math.random()*10) + (Math.random()*10) + 10;
    const {
      cartItems,
      totalCost,
      customerName,
      customerPhone,
      customerEmail,
      orderStatus
    } = req.body;

    const newOrder = new Order({
      orderRef: genOrderRef,
      cartItems,
      totalCost,
      customerName,
      customerPhone,
      customerEmail,
      orderStatus
    });

    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(422);
    throw new Error(`Error: ${err}`);
  }
};

const updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body);
    res.status(204).json(order);
  } catch (err) {
    res.status(422);
    throw new Error(`Error: ${err}`);
  }
};

const deleteOrder = async (req, res) => {
  const order = await Order.findById(req.params.id);
  try {
    if (order) {
      await order.remove();
      res.json({ message: 'Order deleted' });
    }
  } catch (err) {
    res.status(404);
    throw new Error(`Error: ${err}`);
  }
};

export {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
}
