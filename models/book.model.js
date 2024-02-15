const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {type: String, required: true, trim:true,},
  author: {type: String, required: true},
  publishedDate: {type: Date, required: false, default:new Date(),},
  description:  {type: String, required: true, trim:true},
  genre: {type: Number, required: false},
  available: {type: Boolean, required: false},
  price: {type: Number, required: false},
});

module.exports = mongoose.model('book',bookSchema);
