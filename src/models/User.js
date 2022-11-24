import mongoose, {Schema, model} from 'mongoose';

const UserSchema = new Schema({
    name: String, 
    email: {
        type: String,
        unique: true, 
        required: true
    },
    password: String,
    roles: [mongoose.SchemaTypes.ObjectId],
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    }
})

module.exports = model('User', UserSchema);