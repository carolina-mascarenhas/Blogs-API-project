const loginValidation = require('./loginValidation');
const newUserValidation = require('./addUserValidation');
const errorHandler = require('./error');
const tokenValidation = require('./tokenValidation');
const newCategoryValidation = require('./addCategoryValidation');
const newPostValidation = require('./addPostValidation');

module.exports = {
  loginValidation,
  newUserValidation,
  errorHandler,
  tokenValidation,
  newCategoryValidation,
  newPostValidation,
};
