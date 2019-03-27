import mongoose from 'mongoose';

const { Schema } = mongoose;

const ProductSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  lastModifiedDate: { type: String, required: false },
});

const Products = mongoose.model('products', ProductSchema);

export default Products;
