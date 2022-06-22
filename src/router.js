const express = require('express');

const router = express.Router();

router.use('/login', require('./controllers/login'));

module.exports = router;
