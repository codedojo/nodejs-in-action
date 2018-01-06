const { Router } = require('express');

const notes = require('../controllers/notes');

const router = Router();

router.param('id', notes.findOne);

router.get('/', (req, res) => {
    res.redirect('/notes');
});

router.get('/notes', notes.showAll);

router.route('/notes/create')
    .get(notes.showCreatePage)
    .post(notes.create);

router.get('/notes/:id', notes.showViewPage);

router.route('/notes/:id/update')
    .get(notes.showUpdatePage)
    .post(notes.update);


router.route('/notes/:id/delete')
    .get(notes.showDeletePage)
    .post(notes.delete);

module.exports = router;