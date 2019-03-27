import Cities from '../models/City';

export const getAll = () => Cities.find({});

export const getOne = cityId => Cities.find({ id: cityId });

export const removeOne = cityId => Cities.deleteOne({ id: cityId });

export const create = (data) => {
  const city = new Cities(data);
  return city.save();
};

export const update = (cityId, cityBody) => Cities.findOneAndUpdate(
  { id: cityId },
  cityBody,
);
