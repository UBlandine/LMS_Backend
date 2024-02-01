
const { number, string } = require('joi');
const {Schema, model} = require('mongoose');

const transactionSchema = new Schema({
  book: {type: String, required: true},
  user: {type: String, required: true},
  transactionDate: { type: Date, required: true},
  transactionId:{type: String,
    required: [true, "transaction Id is required!"],},
  quantity: {type: Number,required: true}
});

module.exports = model('transaction', transactionSchema);
