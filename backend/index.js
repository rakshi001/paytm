// backend/index.js
const express = require('express');
const mainRouter = require('./routes/index');

const app = express();

app.use('/api/v1', mainRouter);

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
