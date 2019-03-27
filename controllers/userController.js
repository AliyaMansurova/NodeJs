import {
  getAll,
  getOne,
} from '../services/userService';

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
