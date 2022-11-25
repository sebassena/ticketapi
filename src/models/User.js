const mongoose = require('mongoose')
const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: String, 
    email: {
        type: String,
        unique: true, 
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    roles: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Role"
    }]
}, {
    timestamps: true
});

UserSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

UserSchema.statics.comparePassword = async (password, _password) => {
    return await bcrypt.compare(password, _password)
}


module.exports = model('users', UserSchema);