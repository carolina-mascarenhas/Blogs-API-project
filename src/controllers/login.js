const express = require('express');
const middlewares = require('../middlewares');
const userServices = require('../services/login');
const { generateJWTToken } = require('../utils/jwt');

const router = express.Router();

router.post('/', middlewares.loginValidation, async (req, res) => {
  const { email, password } = req.body;

  const [users] = await userServices.getUser(email, password);

  const token = generateJWTToken(users.dataValues);
  
  res.status(200).json({ token });
});

module.exports = router;
