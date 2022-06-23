const { authenticateToken } = require('../utils/jwt');

const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  authenticateToken(token);
  // console.log('console do check:', checkToken);

  return next();
};

module.exports = tokenValidation;
