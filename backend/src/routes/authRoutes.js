const express = require('express');
const { 
  signup, 
  login, 
  signupValidation, 
  loginValidation 
} = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

module.exports = router;
