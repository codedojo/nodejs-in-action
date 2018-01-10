const { Router } = require('express');

const { post: postController } = require('../controllers');

const router = Router();

router.param('id', postController.findPost);

router.get('/', postController.showPosts);
router.get('/posts', postController.showPostsByDate);

router.route('/create')
    .get(postController.showCreatePage)
    .post(postController.createPost);

router.get('/:id', postController.showPost);

router.route('/:id/update')
    .get(postController.showUpdatePage)
    .post(postController.updatePost);

router.route('/:id/delete')
    .get(postController.showDeletePage)
    .post(postController.deletePost);

module.exports = router;