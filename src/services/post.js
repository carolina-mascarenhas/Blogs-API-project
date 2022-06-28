// const Sequelize = require('sequelize');
const { BlogPost } = require('../database/models');
// const config = require('../database/config/config');

// const sequelize = new Sequelize(config.development);

const createPost = async ({ title, content, _categoryIds }, id) => {
  const test = BlogPost.create({
    title,
    content,
    userId: id,
  });
  return test;
};

module.exports = {
  createPost,
};