const { Category } = require('../database/models');

const createCategories = (name) => Category.create({ name });

module.exports = {
  createCategories,
};
