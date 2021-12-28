const express = require('express');
const controller = require('../Controllers/genreController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const genreSchem = require("../Middleware/genreSchema");
const passport = require('passport');

router.post('/add/:id', passport.authenticate('jwt',{session:false}),validate(genreSchem.addGenre) ,controller.addGenre);
router.get('/all', passport.authenticate('jwt',{session:false}),controller.returnAllGenres);
router.put('/:id',  passport.authenticate('jwt',{session:false}),validate(genreSchem.changeGenre), controller.changeGenre);
router.delete('/:id', passport.authenticate('jwt',{session:false}),controller.deleteGenre);

module.exports = router;