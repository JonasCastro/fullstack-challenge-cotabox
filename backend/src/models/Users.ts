import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
  name: String,
});

export default mongoose.model('Users', UsersSchema);
