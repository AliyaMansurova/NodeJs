import {
  getAll,
  getOne,
  removeOne,
  create,
} from '../services/userService';
import { getLastModifiedDate } from '../../helpers/utils';

export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAll();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    let userId = req.params.id;
    if (req.swagger && req.swagger.params) {
      userId = req.swagger.params.userId.value;
    }

    const user = await getOne(userId);
    return res.json(user);
  } catch (err) {
    return next(err);
  }
};

export const removeUser = async (req, res, next) => {
  try {
    let userId = req.params.id;
    if (req.swagger && req.swagger.params) {
      userId = req.swagger.params.userId.value;
    }
    const product = await removeOne(userId);
    return res.json(product);
  } catch (err) {
    return next(err);
  }
};

export const createUser = async (req, res, next) => {
  try {
    const user = req.body;
    await create({ lastModifiedDate: getLastModifiedDate(), ...user });
    return res.json(user);
  } catch (err) {
    return next(err);
  }
};
