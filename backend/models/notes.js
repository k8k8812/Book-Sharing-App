const mongoose = require('mongoose')

const Schema = mongoose.Schema;

// create an instant of schema; 
const noteInfoSchema = new Schema({
    title: String,  
    author: String,
    descriptons: String,
    picUrl: String,
    rating: Number,
    year: Number,
    isRead: Boolean
})

const noteInfo = mongoose.model('notes', noteInfoSchema);

module.exports = noteInfo