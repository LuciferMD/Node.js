const express = require('express');
const controller = require('../Controllers/userController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const userSchema =require("../Middleware/userSchema");

router.post('/register/:id', validate(userSchema.addUser), controller.addUser);
router.get('/all', controller.returnAllUsers);
router.get('/:id',controller.getById);
router.put('/:id', validate(userSchema.changeUser), controller.changeUser);
router.delete('/:id',controller.deleteUser);

module.exports = router;