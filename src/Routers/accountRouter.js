const express = require('express');
const controller = require('../Controllers/accountController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const userSchema =require("../Middleware/userSchema");


router.post('/register/:id', validate(userSchema.addUser), controller.Registration);
router.post('/login',validate(userSchema.addUser), controller.Login );

module.exports = router;