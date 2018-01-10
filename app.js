const path = require('path');
const express = require('express');
const favicon = require('serve-favicon');
const logger = require('morgan');
const bodyParser = require('body-parser');

const routers = require('./routers');

const port = process.env.PORT || 3000;
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/foundation', express.static(path.join(__dirname, 'node_modules', 'foundation-sites', 'dist')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routers.post);
app.use('/authors', routers.author);

app.use((req, res, next) => {
    let error = new Error('Not Found');

    error.status = 404;

    next(error);
});

if (app.get('env') === 'development') {
    app.use((error, req, res) => {
        res.status(error.status || 500);
        res.render('error', {
            message: error.message,
            error
        });
    });
}

app.use((error, req, res) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: {}
    });
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));