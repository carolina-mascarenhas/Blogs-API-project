const express = require('express');
const jwt = require('jsonwebtoken');
const middlewares = require('../middlewares');
const userServices = require('../services/login');

const secret = process.env.JWT_SECRET;

const router = express.Router();

router.post('/', middlewares.loginValidation, async (req, res) => {
  const { email, password } = req.body;

  const [users] = await userServices.getUser(email, password);
  console.log('console de users:', users.dataValues);

  const jwtConfig = {
    algorithm: 'HS256',
  };
  
  const token = jwt.sign({ data: users.dataValues }, secret, jwtConfig);
  res.status(200).json({ token });
});

module.exports = router;
