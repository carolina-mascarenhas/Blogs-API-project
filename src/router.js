const express = require('express');

const router = express.Router();

router.use('/login', require('./controllers/login'));
router.use('/user', require('./controllers/user'));
router.use('/categories', require('./controllers/categories'));

module.exports = router;
