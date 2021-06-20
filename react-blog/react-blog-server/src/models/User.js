import { Schema, model } from 'mongoose';

const UserSchema = Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamp: true }
);

export default model('User', UserSchema);
