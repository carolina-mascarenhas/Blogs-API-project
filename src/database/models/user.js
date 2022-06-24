const userSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  },
  {
    timestamps: false
  });

  userTable.associate = (model) => {
    userTable.hasMany(model.BlogPost,
      { foreignKey: 'userdId', as: 'blogPosts' }
    );
  };

  return userTable
}

module.exports = userSchema;