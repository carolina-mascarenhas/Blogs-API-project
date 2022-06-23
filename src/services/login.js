const { User } = require('../database/models');

const getUser = async (email, password) => {
  const user = await User.findAll({
    attributes: { exclude: ['password'] },
    where: { email, password },
  });

  if (user.length === 0) {
    const error = new Error('Invalid fields');
    error.status = 400;
    throw Object.assign(error);
  }

  return user;
};

module.exports = {
  getUser,
};
