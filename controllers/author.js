const { Author, Post } = require('../models');

module.exports = {
    findAuthor(req, res, next, id) {
        Author.findById(id, {
            include: Post
        })
            .then(author => {
                if (!author) {
                    let error = new Error('Автор не найден');

                    error.status = 404;

                    throw error;
                }
                
                req.author = author;

                next();
            })
            .catch(next);
    },

    showAuthors(req, res, next) {
        Author.findAll()
            .then(authors => {
                res.render('authors', {
                    title: 'Авторы',
                    authors
                });
            })
            .catch(next);
    },

    showAuthor(req, res) {
        res.render('authors/view', {
            title: req.author.title,
            author: req.author
        });
    },

    showCreatePage(req, res, next) {
        res.render('authors/create', {
            title: 'Новый автор',
            author: Author.build()
        });
    },

    showUpdatePage(req, res, next) {
        res.render('authors/update',{
            title: 'Редактировать автора',
            author: req.author
        });
    },

    showDeletePage(req, res) {
        res.render('authors/delete', {
            title: 'Удалить автора',
            author: req.author
        });
    },

    createAuthor(req, res, next) {
        Author.create(req.body)
            .then(() => {
                res.redirect('/authors');
            })
            .catch(next);
    },

    updateAuthor(req, res, next) {
        req.author.update(req.body)
            .then(() => {
                res.redirect(`/authors/${req.author.id}`);
            })
            .catch(next);
    },

    deleteAuthor(req, res, next) {
        req.author.destroy()
            .then(() => {
                res.redirect('/authors');
            })
            .catch(next);
    }
};