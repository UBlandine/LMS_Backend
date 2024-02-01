const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true, trim:true,},
  author: {type: String, required: true},
  publishedDate: {type: Date, required: false, default:new Date(),},
  genre: {type: Number, required: false},
  price: {type: Number, required: false},
});

module.exports = mongoose.model('book',bookSchema);
