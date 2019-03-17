import {
  getAll,
  getOne,
  removeOne,
} from '../services/mongoose/userService';

export const getUsers = async (req, res, next) => {
  try {
    const users = await getAll();
    return res.json(users);
  } catch (err) {
    return next(err);
  }
};

export const getUserById = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const user = await getOne(userId);
    return res.json(user);
  } catch (err) {
    return next(err);
  }
};

export const removeUser = async (req, res, next) => {
  try {
    const userId = req.params.id;
    const product = await removeOne(userId);
    return res.json(product);
  } catch (err) {
    return next(err);
  }
};
