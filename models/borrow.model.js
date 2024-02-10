const mongoose = require('mongoose');

const borrowSchema = new mongoose.Schema({

  name: {type: 'string', required: true},
  email: {type: 'date', required: true},
  contact: {type: 'date', required: true},
  
});

module.exports = mongoose.model('borrow',borrowSchema);