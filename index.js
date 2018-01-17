const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const db = require('./services/db');
const User = require('./models/user');
const auth = require('./middleware/auth');

const server = express();

server.set('view engine', 'pug');

server.use(express.static('public'));
server.use(express.urlencoded({ extended: false }));
//server.use(cookieParser('this is a secret string'));
// server.use(cookieSession({
//     name: 'session',
//     keys: ['this is a secret string'],
//     maxAge: 24 * 60 * 60 * 1000, // 24 hours
//     httpOnly: true
// }));
server.use(session({
    name: 'sessionId',
    secret: 'this is a secret string'
}));

server.use((req, res, next) => {
    if (req.session.userId) {
        User.findById(req.session.userId)
            .then(user => {
                if (user) {
                    req.user = user;
                }

                next();
            })
            .catch(next);
    } else {
        next();
    }
});

server.get('/', (req, res, next) => {
    res.render('index', {
        user: req.user
    });
});

server.route('/login')
    .all(auth.unauthenticated)
    .get((req, res, next) => {
        res.render('login');
    })
    .post((req, res, next) => {
        let { email, password } = req.body;
    
        User.findOne({ email, password })
            .then(user => {
                if (!user) throw new Error('Пользователь не найден');
    
                req.session.userId = user.id;
                res.redirect('/profile');
            })
            .catch(next);
    });

server.get('/logout', auth.authenticated, (req, res, next) => {
    req.session = null;
    res.redirect('/');
});

server.get('/profile', auth.authenticated, (req, res, next) => {
    res.render('profile', {
        user: req.user
    });
});

server.get('/admin', auth.authenticated, auth.authorized, (req, res, next) => {
    res.render('admin', {
        user: req.user
    });
});

server.listen(3000, () => console.log('Express: 3000'));