const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const RoleSchema = new Schema({
    roleName: {
        type: String,
        required: true
    },
    permisos: {
        categories: [{
            type: mongoose.SchemaTypes.ObjectId,
            ref: "Category"
        }],
        edit: Boolean,
        reply: Boolean,
        read: {
            type: Boolean, 
            default: true
        }
    }
}, {
    timestamps: true
});

module.exports = model('Role', RoleSchema)