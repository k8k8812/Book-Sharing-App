const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// create an instant of schema; 
const noteInfoSchema = new Schema({
    title: String,  
    author: String,
    descriptions: String,
    picUrl: String,
    rating: Number,
    year: Number,
    isRead: Boolean,
    genre: Array,
})

const noteInfo = mongoose.model('notes', noteInfoSchema);

module.exports = noteInfo