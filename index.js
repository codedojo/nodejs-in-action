const express = require('express');
const path = require('path');
const logger = require('morgan');

const auth = require('./middleware/auth');

const mainRouter = require('./routers/main');
const adminRouter = require('./routers/admin');
const bookRouter = require('./routers/book');

const server = express();

server.use(express.static(path.join(__dirname, 'public')));

server.use(logger('dev'));

server.use('/', mainRouter);

server.use(auth);

server.use('/admin', adminRouter);
server.use('/books', bookRouter);

server.listen(3000, () => console.log('Express', 3000));