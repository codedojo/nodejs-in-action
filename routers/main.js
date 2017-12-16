const { Router } = require('express');

const router = Router();

// GET /
router.get('/', (req, res) => {
    res.send('Hello Express');
});

// GET /about
router.get('/about', (req, res) => {
    res.send('About');
});

module.exports = router;