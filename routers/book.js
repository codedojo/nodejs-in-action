const express = require('express');

const bookController = require('../controllers/book');

const router = express.Router();

// GET /books
router.get('/', bookController.showBooks);

// GET /books/1
router.get('/:id', bookController.showBook);

module.exports = router;