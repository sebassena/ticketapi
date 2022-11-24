import mongoose, {Schema, model} from 'mongoose';

const RoleSchema = new Schema({
    roleName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    permisos: {
        categories: [mongoose.SchemaTypes.ObjectId],
        edit: Boolean,
        reply: Boolean,
        read: {
            type: Boolean, 
            default: true
        }
    }
});

module.exports = model('Role', RoleSchema)