const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema(
    {
        title: {
            type:String,
            required: true
        },
        author: {
            type:String,
            required: true
        },
        currentPage : {
            type: Number,
            required: true  
        },
        numberPages : {
            type: Number,
            required: true
        },
        thoughts: {
            type: String,
            required: true
        },finished: {
            type: Boolean,
            default: false,
            required: true
        }
    }, {timestamps: true}
);

const Book = mongoose.model('Book', bookSchema);
module.exports = Book;