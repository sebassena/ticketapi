import {Schema, model} from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: () => Date.now()
    },
    updatedAt: {
        type: Date,
        default: () => Date.now()
    }

});

module.exports = model('Category', CategorySchema)