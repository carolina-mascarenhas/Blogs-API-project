const { authenticateToken } = require('../utils/jwt');

const tokenValidation = async (req, res, next) => {
  const token = req.headers.authorization;
  // console.log('console do token:', token);

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const checkToken = await authenticateToken(token);
  // console.log('console do check:', checkToken);

  if (!checkToken) return res.status(401).json({ message: 'Expired or invalid token' });

  return next();
};

module.exports = tokenValidation;
