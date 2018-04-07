module.exports = function authorize(req, res, next) {
    if (!req.user.isAdmin()) return next(new Error('Not authorized'));

    next();
};