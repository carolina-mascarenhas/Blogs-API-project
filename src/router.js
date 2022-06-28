const express = require('express');

const router = express.Router();

router.use('/login', require('./controllers/login'));
router.use('/user', require('./controllers/user'));
router.use('/categories', require('./controllers/categories'));
router.use('/post', require('./controllers/post'));

module.exports = router;
