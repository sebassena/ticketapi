const mongoose = require('mongoose')
const {Schema, model} =  require('mongoose');

const ticketSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
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
    replies: [String],
    status: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Category"
    }
})

exports.default = model('tickets', ticketSchema)