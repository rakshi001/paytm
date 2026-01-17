// backend/index.js
const express = require('express');
const app = express();
// const cors = require('cors');

const mainRouter = require('./routes/index');

// const corsOptions = {
//   origin: ['http://localhost:5173'],
// };

app.use(express.json());
// app.use(cors(corsOptions));

app.use('/api/v1', mainRouter);

app.listen(3000, () => {
  console.log('app is listening on port 3000');
});
