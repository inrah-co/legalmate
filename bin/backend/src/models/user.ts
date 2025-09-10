import mongoose, { Schema, Document } from 'mongoose';

interface IUser extends Document {
    name: string;
    password: string;
    optimisedResponse: boolean;
    state: string;
}

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    password: { type: String, required: true },
    optimisedResponse: { type: Boolean, default: true },
    state: { type: String, required: true }
});

const User = mongoose.model<IUser>('User', userSchema);

export { User, IUser };