const express = require ('express');
const router = express.Router();
const {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('../controllers/orderController');

const { protect } = require('../middleware/authMiddleware');

router.route('/').get(protect, getOrders).post(createOrder);
router.route('/:id').get(getOrder).put(protect, updateOrder).delete(protect, deleteOrder);

module.exports = router;
