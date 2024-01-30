const UserModel = require('../models/user.models');
const BookModel = require('../models/book.model');
const TransactionModel = require('../models/transaction.model');

const record = async (req, res, next) => {
  try {
    var recordedUser = await UserModel.create(req.body);
    res.status(201).json({
      message: "User recorded successfully!",
      user: recordedUser
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const list = async (req, res, next) => {
  try {
    var allUsers = await UserModel.find({});
    res.status(200).json({
      users: allUsers
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const findById = async (req, res, next) => {
  try {
    const userId = req.query.id;
    const foundUser = await UserModel.findById(userId);

    if (foundUser) {
      res.status(200).json({
        user: foundUser
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const findByEmail = async (req, res, next) => {
  try {
    let userEmail = req.params.email;
    var foundUser = await UserModel.find({ email: userEmail });
    res.status(200).json({
      user: foundUser
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

const remove = async (req, res, next) => {
  try {
    var deletedUser = await UserModel.findByIdAndDelete(req.query.id);
    if (deletedUser) {
      res.status(200).json({ message: "User deleted successfully!" });
    } else {
      res.status(400).json({ message: "User not found!" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const update = async (req, res, next) => {
  try {
    console.log(req.body);
    var updatedUser = await UserModel.findByIdAndUpdate({ _id: req.query.id }, req.body);
    var user = await UserModel.findById(updatedUser._id);
    res.status(201).json({
      message: 'User updated successfully',
      user
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const borrowBook = async (req, res, next) => {
  try {
    const userId = req.body.userId;
    const bookId = req.body.bookId;

    const user = await UserModel.findById(userId);
    const book = await BookModel.findById(bookId);

    if (user && book && book.isAvailable) {
      user.borrowedBooks.push(bookId);
      await user.save();

      book.isAvailable = false;
      await book.save();

      await TransactionModel.create({
        userId,
        bookId,
        borrowDate: new Date(),
      });

      res.status(201).json({
        message: 'Book borrowed successfully!',
      });
    } else {
      res.status(400).json({
        message: 'Book not available or user not found.',
      });
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  findByEmail,
  findById,
  list,
  remove,
  record,
  update,
  borrowBook,
};
