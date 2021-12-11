const express = require('express');
const controller = require('../Controllers/userController')
const router = express.Router();

router.post('/register', controller.addUser)

module.exports = router;