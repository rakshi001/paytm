// backend/routes/user.js
const express = require('express');
const { User } = require('../db');
const zod = require('zod');

const router = express.Router();

/* 
    first check zod
    parse req body and confirm it is legit
    check if not success the return 411
    check if user already exist return 411
    then create user in db
    sign a token
    retrun token
  */

const signUpSuccess = zod.object({
  username: zod.string().email,
  password: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
});

router.post('/signup', async (req, res) => {

  





});

module.exports = { User };
