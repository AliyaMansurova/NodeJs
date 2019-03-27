import mongoose from 'mongoose';

const { Schema } = mongoose;

export const CitySchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  country: { type: String, required: false },
  capital: { type: Boolean, required: false },
  location: {
    lat: { type: Number, required: false },
    long: { type: Number, required: false },
  },
  lastModifiedDate: { type: String, required: false },
});

const Cities = mongoose.model('cities', CitySchema);

export default Cities;
