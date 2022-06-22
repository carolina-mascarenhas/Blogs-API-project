const loginValidation = require('./loginValidation');
const newUserValidation = require('./addUserValidation');
const errorHandler = require('./error');

module.exports = {
  loginValidation,
  newUserValidation,
  errorHandler,
};
