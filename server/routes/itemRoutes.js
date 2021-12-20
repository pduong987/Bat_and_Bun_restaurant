import express from 'express';
const router = express.Router();
import {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem
} from '../controllers/itemController.js'
import { protect } from '../middleware/authMiddleware.js';

router.route('/').get(getItems).post(protect, createItem);
router.route('/:id').get(getItem).put(protect, updateItem).delete(protect, deleteItem);

export default router;
