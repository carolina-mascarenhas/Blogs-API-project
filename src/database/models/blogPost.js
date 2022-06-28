const blogPostSchema = (sequelize, DataTypes) => {
  const blogPostTable = sequelize.define('BlogPost', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: 'TIMESTAMP' },
    updated: { type: 'TIMESTAMP' }
  },
  {
    timestamps: false
  });

  blogPostTable.associate = (model) => {
    blogPostTable.belongsTo(model.User,
      { foreignKey: 'userId', as: 'user' }
    );
  };

  return blogPostTable;
}

module.exports = blogPostSchema;