
const express = require('express');
const ejs = require('ejs');

const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {
        viewEngines: ['EJS', 'Pug', 'Handlebars']
    });
});

app.listen(3000, () => console.log('Express', 3000));