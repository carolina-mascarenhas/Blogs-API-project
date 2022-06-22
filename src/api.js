require('express-async-errors');
const express = require('express');
const middlewares = require('./middlewares');

const app = express();

app.use(express.json());

app.use(require('./router'));

app.use(middlewares.errorHandler);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
