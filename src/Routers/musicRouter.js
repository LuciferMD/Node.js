const express = require('express');
const controller = require('../Controllers/musicController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const musicSchema = require("../Middleware/musicSchema");
const passport = require('passport');

router.post('/add/:id',  passport.authenticate('jwt',{session:false}),validate(musicSchema.addMusic), controller.addMusic); 
router.put('/:id',   passport.authenticate('jwt',{session:false}),validate(musicSchema.changeMusic) ,controller.changeMusic);
router.get('/:id',  passport.authenticate('jwt',{session:false}),controller.getById);
router.delete('/:id',  passport.authenticate('jwt',{session:false}),controller.deleteMusic);
router.get('/all',  passport.authenticate('jwt',{session:false}),controller.returnAllMusic);

module.exports = router;