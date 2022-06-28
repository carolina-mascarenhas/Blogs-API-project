const express = require('express');
const postServices = require('../services/post');
const middlewares = require('../middlewares');
const { authenticateToken } = require('../utils/jwt');

const router = express.Router();

// router.use(middlewares.tokenValidation);

router.post('/', middlewares.newPostValidation, async (req, res) => {
  const token = req.headers.authorization;
  const { categoryIds } = req.body;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const { data: { id } } = authenticateToken(token);

  const arr = [];
  categoryIds.map((ids) => arr.push(ids === id));

  const promissesResolved = await Promise.all(arr);
  console.log('console de promisseall:', promissesResolved);

  const test = promissesResolved.some((bolean) => bolean === true);
  console.log('finalmente:', test);

  if (test === false) return res.status(400).json({ message: '"categoryIds" not found' });

  const posts = await postServices.createPost(req.body, id);
  res.status(201).json(posts);
});

module.exports = router;