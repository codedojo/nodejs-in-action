module.exports = function session(req, res, next) {
    req.session = {};

    next();
};