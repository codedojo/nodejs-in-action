const { Router } = require('express');

const router = Router();

// GET /admin
router.get('/', (req, res) => {
    res.send('Admin');
});

module.exports = router;