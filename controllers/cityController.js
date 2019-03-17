import {
  getAll,
  getOne,
  create,
  removeOne,
  update,
} from '../services/mongoose/cityService';
import { getLastModifiedDate } from '../utils/utils';


export const getAllCities = async (req, res, next) => {
  try {
    const cities = await getAll();
    return res.json(cities);
  } catch (err) {
    return next(err);
  }
};

export const createCity = async (req, res, next) => {
  try {
    const city = req.body;
    await create({ lastModifiedDate: getLastModifiedDate(), ...city });
    return res.json(city);
  } catch (err) {
    return next(err);
  }
};

export const getCityById = async (req, res, next) => {
  try {
    const cityId = req.params.id;
    const city = await getOne(cityId);
    return res.json(city);
  } catch (err) {
    return next(err);
  }
};

export const removeCity = async (req, res, next) => {
  try {
    const cityId = req.params.id;
    const city = await removeOne(cityId);
    return res.json(city);
  } catch (err) {
    return next(err);
  }
};

export const updateCity = async (req, res, next) => {
  try {
    const cityId = req.params.id;
    const cityBody = req.body;
    const city = await update(cityId, { lastModifiedDate: getLastModifiedDate(), ...cityBody });
    return res.json(city);
  } catch (err) {
    return next(err);
  }
};
