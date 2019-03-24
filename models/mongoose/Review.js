import mongoose from 'mongoose';

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  id: { type: Number, required: true },
  productId: { type: Number, required: true },
  review: { type: String, required: true },
  lastModifiedDate: { type: String, required: false },
});

const Reviews = mongoose.model('reviews', ReviewSchema);

export default Reviews;
