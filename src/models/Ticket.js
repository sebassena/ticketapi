const mongoose = require('mongoose')
const {Schema, model} =  require('mongoose');

const TicketSchema = new Schema({
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
        ref: "users"
    },
    replies: [{
        replyBy: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: "users"
        },
        replyContent: {
            type: String
        },
        replyDate: {
            type: Date,
            default: () => Date.now()
        }
    }],
    status: String,
    category: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "categories"
    }
}, {
    timestamps: true
})

module.exports = model('tickets', TicketSchema)