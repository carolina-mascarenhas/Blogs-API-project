const { User } = require('../database/models');

const getUser = (email, password) => User.findAll({
  attributes: ['email', 'password'],
  where: { email, password },
});

module.exports = {
  getUser,
};
