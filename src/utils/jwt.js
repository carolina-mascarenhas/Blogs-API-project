const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const generateJWTToken = (param) => {
  // console.log('console de param:', param);
  const token = jwt.sign({ data: param }, secret, jwtConfig);
  return token;
};

const authenticateToken = (token) => {
  try {
    const decoded = jwt.verify(token, secret);
    // console.log('console de decodes:', decoded);
    return decoded;
  } catch (e) {
    const error = new Error('Expired or invalid token');
    error.status = 401;
    throw Object.assign(error);
  }
};

module.exports = {
  generateJWTToken,
  authenticateToken,
};
