import express from 'express';
const router = express.Router();
import {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder
} from '../controllers/orderController.js'
import { protect } from '../middleware/authMiddleware.js';

// router.route('/').get(protect, getOrders).post(createOrder);
// router.route('/:id').get(getOrder).put(protect, updateOrder).delete(protect, deleteOrder);

router.route('/').get(getOrders).post(createOrder);
router.route('/:id').get(getOrder).put(updateOrder).delete(deleteOrder);

export default router;
