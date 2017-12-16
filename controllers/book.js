const books = require('../data/books');

module.exports = {
    showBooks(req, res) {
        res.send(books);
    },

    showBook(req, res) {
        let book = books.find(book => book.id == req.params.id);
        
        res.send(book);
    }
};