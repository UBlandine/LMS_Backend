const buyModel = require('../models/buy.model');
const User = require('../models/user.model');
const Book = require('../models/book.model');
const Buy = require('../models/buy.model');

// Controller function to handle book purchase
exports.buyBook = async (req, res) => {
  try {
    // Assuming you're passing the book details in the request body
    const { name, email } = req.body;

    // Create a new instance of the Buy model
    const buy = new Buy({
      name: name,
      email: email
    });

    // Save the new buy entry to the database
    await buy.save();

    // Send a success message
    res.status(200).json({ message: 'Book bought successfully!' });
  } catch (err) {
    // If there's an error, send an error response
    console.error(err);
    res.status(500).json({ message: 'Failed to buy the book. Please try again.' });
  }
};
