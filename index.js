const fs = require('fs');
const express = require('express');

const books = require('./data/books');

const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', { title: 'Hello Pug' });
});

app.get('/books', (req, res) => {
    res.render('books', {
        title: 'Книги',
        books
    });
});

app.listen(3000, () => console.log('Express', 3000));