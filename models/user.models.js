const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, unique: true,match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please provide a valid email',
    ], required: [true, "Email is required!"],},
  password: {type: String, required: true},
  address: { type: String, required: true},
 telephone: {type: String, required: true},
});
module.exports = mongoose.model('user', userSchema);