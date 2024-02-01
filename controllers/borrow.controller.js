const borrowModel = require('../models/borrow.model');
const User = require('../models/user.model');
const Book = require('../models/book.model');


// Controller function for borrowing a book
async function borrowBook(req, res) {
    try {
        const { userId, bookId } = req.body;

        const user = await User.findById(userId);
        const book = await Book.findById(bookId);

        if (!user || !book) {
            return res.status(404).json({ message: 'User or book not found' });
        }

        if (!book.available) {
            return res.status(400).json({ message: 'Book not available for borrowing' });
        }

        user.borrowedBooks.push(book);
        user.save();

        book.available = false;
        book.save();

        res.json({ message: 'Book borrowed successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// Export the controller function
module.exports = {
    borrowBook
};
