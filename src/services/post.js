// const Sequelize = require('sequelize');
const { BlogPost, User, Category, PostCategory } = require('../database/models');
// const config = require('../database/config/config');

// const sequelize = new Sequelize(config.development);

const createPost = async ({ title, content, categoryIds }, id) => {
  const test = await BlogPost.create({
    title,
    content,
    userId: id,
  });

  categoryIds.map((idd) => PostCategory.create({
    postId: test.dataValues.id,
    categoryId: idd,
  }));

  // console.log(test);

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