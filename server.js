const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const notes = require('./routers/notes');

const app = express();

app.set('view engine', 'pug');

app.use('/foundation', express.static(path.join(__dirname, 'node_modules', 'foundation-sites', 'dist')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(notes);

app.listen(3000, () => console.log('Express:', 3000));