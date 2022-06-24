const postCategorySchema = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true }
  });

  postCategoryTable.associate = (model) => {
    model.BlogPost.belongsToMany(model.Category, {
      as: 'categories',
      through: postCategoryTable,
      foreignKey: 'id',
      otherKey: 'id', 
    });

    model.Category.belongsToMany(model.BlogPost, {
      as: 'blogPosts',
      through: postCategoryTable,
      foreignKey: 'id',
      otherKey: 'id',
    });
  };

  return postCategoryTable;
};

module.exports = postCategorySchema;