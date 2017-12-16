const { auth: { login, password } } = require('../config');

module.exports = (req, res, next) => {
    if (req.query.login === login && req.query.password === password) {
        let user = { login };
        
        req.user = user;

        next();
    } else {
        res.redirect('/');
    }
};