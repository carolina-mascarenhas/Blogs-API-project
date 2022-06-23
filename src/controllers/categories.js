const express = require('express');
const categoriesService = require('../services/categories');
const middlewares = require('../middlewares');

const router = express.Router();

router.use(middlewares.tokenValidation);

router.post('/', middlewares.newCategoryValidation, async (req, res) => {
  const { name } = req.body;

  const newCategorie = await categoriesService.createCategories(name);
  res.status(201).json(newCategorie);
});

module.exports = router;