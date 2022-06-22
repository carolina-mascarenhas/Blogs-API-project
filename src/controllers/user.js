const express = require('express');
const jwt = require('jsonwebtoken');
const userServices = require('../services/user');
const middlewares = require('../middlewares');

const secret = process.env.JWT_SECRET;

const routes = express.Router();

routes.post('/', middlewares.newUserValidation, async (req, res) => {
  const user = await userServices.createUser(req.body);
  // console.log('console de user:', user);

  const jwtConfig = {
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: user }, secret, jwtConfig);
  res.status(201).json({ token });
});

module.exports = routes;