const { connect, ObjectID } = require('../services/db');

module.exports = {
    findOne(req, res, next, id) {
        connect().then(collection => {
            collection.findOne({ _id: ObjectID(id) })
                .then(note => {
                    req.note = note;

                    next();
                })
                .catch(next);
        });
    },

    showAll(req, res, next) {
        connect().then(collection => {
            collection.find().toArray()
                .then(notes => {
                    res.render('index', { notes });
                })
                .catch(next);
        });
    },

    showCreatePage(req, res) {
        res.render('create');
    },

    showViewPage(req, res) {
        res.render('view', {
            note: req.note
        });
    },

    showUpdatePage(req, res) {
        res.render('update', {
            note: req.note
        });
    },

    showDeletePage(req, res) {
        res.render('delete');
    },

    create(req, res, next) {
        connect().then(collection => {
            let note = {
                id: Date.now(),
                title: req.body.title,
                content: req.body.content
            };

            collection.insertOne(note)
                .then(() => res.redirect('/notes'))
                .catch(next);
        });
    },

    update(req, res, next) {
        connect().then(collection => {
            collection.updateOne({ _id: ObjectID(req.params.id) }, { $set: req.body })
                .then(() => res.redirect('/notes'))
                .catch(next);
        });
    },

    delete(req, res, next) {
        connect().then(collection => {
            collection.deleteOne({ _id: ObjectID(req.params.id) })
                .then(() => res.redirect('/notes'))
                .catch(next);
        });
    }
};