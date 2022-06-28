const postCategorySchema = (sequelize, DataTypes) => {
  const postCategoryTable = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true }
  },
  {
    timestamps: false,
  });

  postCategoryTable.associate = (model) => {
    model.BlogPost.belongsToMany(model.Category, {
      as: 'categories',
      through: postCategoryTable,
      foreignKey: 'postId',
      otherKey: 'categoryId', 
    });

    model.Category.belongsToMany(model.BlogPost, {
      as: 'blogPosts',
      through: postCategoryTable,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  };

  return postCategoryTable;
};

module.exports = postCategorySchema;