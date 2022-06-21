const userSchema = (sequelize, DataTypes) => {
  const userTable = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING
  })

  return userTable
}

module.exports = userSchema;