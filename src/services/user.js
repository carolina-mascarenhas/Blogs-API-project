const { User } = require('../database/models');

const createUser = async ({ displayName, email, password, image }) => {
  const check = await User.findAll({
    attributes: ['email'],
    where: { email },
  });
  // console.log('console check:', check);

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

module.exports = {
  createUser,
};
