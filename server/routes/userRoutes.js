const express = require('express');
const router = express.Router();
const { registerUser, authUser } = require('../controllers/userController')
router.route('/').post(registerUser)
router.route('/login').get(authUser)

module.exports = router