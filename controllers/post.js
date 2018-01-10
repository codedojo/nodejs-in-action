const { Author, Post } = require('../models');

module.exports = {
    findPost(req, res, next, id) {
        Post.findById(id, {
            include: Author
        })
            .then(post => {
                if (!post) {
                    let error = new Error('Пост не найден');

                    error.status = 404;

                    throw error;
                }

                req.post = post;

                next();
            })
            .catch(next);
    },

    showPosts(req, res, next) {
        Post.findAll({
            include: Author
        })
            .then(posts => {
                res.render('posts', {
                    title: 'Express Blog',
                    posts
                });
            })
            .catch(next);
    },

    showPostsByDate(req, res, next) {
        Post.findAll({
            where: {
                date: req.query.date
            },
            include: Author
        })
            .then(posts => {
                res.render('posts', {
                    title: req.query.date,
                    posts
                });
            })
            .catch(next);
    },

    showPost(req, res) {
        res.render('posts/view', {
            title: req.post.title,
            post: req.post
        });
    },

    showCreatePage(req, res, next) {
        Author.findAll()
            .then(authors => {
                res.render('posts/create', {
                    title: 'Новый пост',
                    post: Post.build(),
                    authors
                });
            })
            .catch(next);
    },

    showUpdatePage(req, res, next) {
        Author.findAll()
            .then(authors => {
                res.render('posts/update',{
                    title: 'Редактировать пост',
                    post: req.post,
                    authors
                });
            })
            .catch(next);
    },

    showDeletePage(req, res) {
        res.render('posts/delete', {
            title: 'Удалить пост',
            post: req.post
        });
    },

    createPost(req, res, next) {
        Post.create(req.body)
            .then(post => {
                res.redirect('/');
            })
            .catch(next);
    },

    updatePost(req, res, next) {
        req.post.update(req.body)
            .then(() => {
                res.redirect(`/${req.post.id}`);
            })
            .catch(next);
    },

    deletePost(req, res, next) {
        req.post.destroy()
            .then(() => {
                res.redirect('/');
            })
            .catch(next);
    }
};