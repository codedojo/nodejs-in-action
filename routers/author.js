const { Router } = require('express');

const { author: authorController } = require('../controllers');

const router = Router();

router.param('id', authorController.findAuthor);

router.get('/', authorController.showAuthors);

router.route('/create')
    .get(authorController.showCreatePage)
    .post(authorController.createAuthor);

router.get('/:id', authorController.showAuthor);

router.route('/:id/update')
    .get(authorController.showUpdatePage)
    .post(authorController.updateAuthor);

router.route('/:id/delete')
    .get(authorController.showDeletePage)
    .post(authorController.deleteAuthor);

module.exports = router;