const express = require('express');
const authController = require('../controller/auth.controller')

const router = express.Router();

//Post API /api/auth/register
router.post('/register',authController.registerUser)



module.exports= router;