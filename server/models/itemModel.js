import mongoose from 'mongoose';

const itemSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    notes: { type: String },
    image: { type: String },
    category: { type: String, required: true },
    price: { type: Number, required: true }
  }
);

const Item = mongoose.model('Item', itemSchema);

export default Item;
