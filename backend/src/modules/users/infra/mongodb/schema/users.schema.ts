import * as Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema({
  firstName: String,
  lastName: String,
  participation: Number,
});

export default UserSchema;
