import Users from '../../models/mongoose/User';

export const getAll = () => Users.find({});

export const getOne = userId => Users.find({ id: userId });

export const removeOne = userId => Users.deleteOne({ id: userId });
