import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  lastModifiedDate: { type: String, required: false },
});

const Users = mongoose.model('users', UserSchema);

export default Users;
