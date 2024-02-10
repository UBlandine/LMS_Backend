const mongoose = require('mongoose');

const buySchema = new mongoose.Schema({

  name: {type: 'string', required: true},
  email: {type: 'date', required: true},
  
});

module.exports = mongoose.model('buy',buySchema);