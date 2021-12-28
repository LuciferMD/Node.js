const express = require('express');
const controller = require('../Controllers/playlistController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const playlistSchema = require("../Middleware/playlistSchema")
const passport = require('passport');

router.post('/add/:id',passport.authenticate('jwt',{session:false}) ,validate(playlistSchema.addPlaylist), controller.addPlaylist); 
router.put('/:id', passport.authenticate('jwt',{session:false}),validate(playlistSchema.changePlaylist), controller.changePlaylist);
router.get('/:id', passport.authenticate('jwt',{session:false}),controller.getById);
router.delete('/:id', passport.authenticate('jwt',{session:false}),controller.deletePlaylist);
router.get('/all', passport.authenticate('jwt',{session:false}),controller.returnAllPlaylist);

module.exports = router;