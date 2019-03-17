import mongoose from 'mongoose';

const { Schema } = mongoose;

export const CitySchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  country: { type: String, required: true },
  capital: { type: Boolean, required: true },
  location: {
    lat: { type: Number, required: true },
    long: { type: Number, required: true },
  },
  lastModifiedDate: { type: String, required: false },
});

const Cities = mongoose.model('cities', CitySchema);

export default Cities;
