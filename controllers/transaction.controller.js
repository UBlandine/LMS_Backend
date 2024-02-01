const transactionModel = require('../models/transaction.model');

const record = async (req,res,next) =>{
  try{
    var recordedTransaction = await  transactionModel.create(req.body);
    res.status(201).json({
      message: "transaction recorded successfully!",
      transaction: recordedTransaction
    });
  } catch (error) {
    res.status(500).send(error);
  }
}
const list = async (req, res, next) => {
  try {
    var allTransaction = await transactionModel.find({});
    res.status(200).json({
      users: allTransaction
    });
  }catch (error) {
    res.status(500).send(error);
  }
}
const findById = async (req, res, next) => {

  try{
    let transactionId = req.query.id;
    var foundTransaction = await transactionModel.findById(transactionId);
    res.status(200).json({
      transaction: foundTransaction
  });
} catch (error) {
  res.status(500).send(error);
}
  }

  const findByTransaction = async (req, res, next) => {
    try{
      let trans = req.params.transaction;
      var foundTransaction = await transactionModel.find({ transaction: trans});
      res.status(200).json({
        transaction: foundTransaction
      });
    } catch (error) {
      res.status(500).send(error);

    }
  }
  
  const remove = async (req, res, next) => {
    try{
      var deletedTransaction = await transactionModel.findByIdAndDelete(req.query.id);
      if (deletedTransaction){
        res.status(200).json({ message: "Deleted!" });
      } else {
        res.status(400).json({message: "transaction not found"});
      }
    }catch (error) {
      res.status(500).send(error);
    }
  }
  const update = async (req, res, next) => {
    try {
        console.log(req.body);
        var updatedtransaction = await transactionModel.findByIdAndUpdate({_id:req.query.id},req.body);
        var transaction = await transactionModel.find(updatedtransaction._id);
        res.status(201).json({
        message:'transaction updated successfully',
        transaction
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
};






module.exports = {
  findByTransaction,findById, list, remove, record, update
}
