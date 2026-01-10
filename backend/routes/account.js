const express = require('express');

const router = express.Router();

router.use('/', (req, res) => {
  res.json({
    msg: 'this is for account handler',
  });
});
module.exports = router;
