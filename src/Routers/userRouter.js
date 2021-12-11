const express = require('express');
const controller = require('../Controllers/userController')
const router = express.Router();

router.post('/register', controller.addUser);

router.get('/allUsers', controller.returnAllUsers);


module.exports = router;