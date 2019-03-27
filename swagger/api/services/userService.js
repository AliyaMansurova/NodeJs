import Users from '../models/User';

export const getAll = () => Users.find({});

export const getOne = userId => Users.find({ id: userId });

export const removeOne = userId => Users.deleteOne({ id: userId });

export const create = (data) => {
  const user = new Users(data);
  return user.save();
};
