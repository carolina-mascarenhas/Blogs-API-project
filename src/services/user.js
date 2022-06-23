const { User } = require('../database/models');

const createUser = async ({ displayName, email, password, image }) => {
  const check = await User.findAll({
    where: { email },
  });

  if (check.length === 0) {
    const { dataValues } = await User.create({ displayName, email, password, image });
    return {
      id: dataValues.id,
      displayName,
      email,
      image,
    };
  }

  const error = new Error('User already registered');
  error.status = 409;
  throw Object.assign(error);
};

const getUsers = () => User.findAll({
  attributes: { exclude: ['password'] },
});

const getUsersByPk = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    const error = new Error('User does not exist');
    error.status = 404;
    throw Object.assign(error);
  }

  return user;
};

module.exports = {
  createUser,
  getUsers,
  getUsersByPk,
};
