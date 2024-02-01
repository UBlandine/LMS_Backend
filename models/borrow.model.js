const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({
  bookId: {type: 'string', required: true},
  name: {type: 'string', required: true},
  borrowDate: {type: 'date', required: true},
  dueDate: {type: 'date', required: false},
  email: {type: 'string', required: true},
});

module.exports = mongoose.model('borrow',borrowSchema);