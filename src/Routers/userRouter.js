const express = require('express');
const controller = require('../Controllers/userController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const userSchema =require("../Middleware/userSchema");
const passport = require('passport')


router.get('/all', passport.authenticate('jwt',{session:false}),controller.returnAllUsers);
router.get('/:id', passport.authenticate('jwt',{session:false}),controller.getById);
router.put('/:id', passport.authenticate('jwt',{session:false}),validate(userSchema.changeUser), controller.changeUser);
router.delete('/:id', passport.authenticate('jwt',{session:false}),controller.deleteUser);

module.exports = router;