// const Sequelize = require('sequelize');
const { BlogPost, User, Category } = require('../database/models');
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

const getPosts = () => {
  const test = BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return test;
};

module.exports = {
  createPost,
  getPosts,
};