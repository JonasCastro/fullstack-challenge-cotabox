import mongoose, { Document } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  participation: number;
}

const UsersSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  participation: { type: String, required: true },
});

export default mongoose.model<IUser>('Users', UsersSchema);
