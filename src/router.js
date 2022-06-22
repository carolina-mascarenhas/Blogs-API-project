const express = require('express');

const router = express.Router();

router.use('/login', require('./controllers/login'));
router.use('/user', require('./controllers/user'));

module.exports = router;
