
const bookModel = require('../models/book.model');
const record = async (req, res, next) =>{
  try{
    var recordedBook = await bookModel.create(req.body);
    res.status(201).json({
      message: "book recorded successfully!",
      book: recordedBook
    });
  } catch(error) {
    res.status(500).send(error);
  }
}
const list = async (req, res, next) => {
  try{
    var allBooks = await bookModel.find({});
    res.status(200).json({
      users: allBooks
    });
  } catch (error) {
    res.status(500).send(error);
  }
}
const findById = async (req, res, next) => {

  try {
    let bookId = req.query.id;
    var foundBook = await bookModel.findById(bookId);
    res.status(200).json({
      user: foundBook
  });
} catch (error) {
  res.status(500).send(error);
}
  }
  
  const remove = async (req, res, next) =>{
    try{
      var deletedBook = await bookModel.findByIdAndDelete(req.query.id);
      if (deletedBook) {
        res.status(200).json({ message: "book Deleted well!" });
      } else {
        res.status(400).json({message: "book not found!"});
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
  const update = async (req, res, next) => {
    try {
        console.log(req.body);
        var updatedBook = await bookModel.findByIdAndUpdate({_id:req.query.id},req.body);
        var book = await bookModel.find(updatedBook._id);
        res.status(201).json({
        message:'book updated successfully',
        book
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = {
  findById, list, remove, record, update
}
