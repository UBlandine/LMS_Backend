const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  name: {type: 'string', required: true},
  email:{type: 'string', required: true},
  message: {type: 'string', required: false}
})
module.exports = mongoose.model('visit', visitSchema);