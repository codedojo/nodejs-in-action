module.exports = {
    authenticated(req, res, next) {
        if (!req.user) return res.redirect('/');
        
        next();
    },

    unauthenticated(req, res, next) {
        if (req.user) return res.redirect('/');
        
        next();
    },

    authorized(req, res, next) {
        if (req.user.isAdmin) return next();

        res.redirect('/');
    }
};