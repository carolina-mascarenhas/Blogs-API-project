const express = require('express');
const jwt = require('jsonwebtoken');
const middlewares = require('../middlewares');
const userServices = require('../services/login');

const secret = process.env.JWT_SECRET;

const router = express.Router();

router.post('/', middlewares.loginValidation, async (req, res) => {
  const { email, password } = req.body;

  const users = await userServices.getUser(email, password);
  // console.log('console de users:', users);

  if (users.length === 0) {
    return res.status(400).json({ message: 'Invalid fields' });
  }

  const jwtConfig = {
    algorithm: 'HS256',
  };
  
  const token = jwt.sign({ data: users }, secret, jwtConfig);
  res.status(200).json({ token });
});

module.exports = router;
