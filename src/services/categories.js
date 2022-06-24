const { Category } = require('../database/models');

const createCategories = (name) => Category.create({ name });

const getCategories = () => Category.findAll();

module.exports = {
  createCategories,
  getCategories,
};
