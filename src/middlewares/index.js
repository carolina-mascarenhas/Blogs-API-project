const loginValidation = require('./loginValidation');
const newUserValidation = require('./addUserValidation');
const errorHandler = require('./error');
const tokenValidation = require('./tokenValidation');

module.exports = {
  loginValidation,
  newUserValidation,
  errorHandler,
  tokenValidation,
};
