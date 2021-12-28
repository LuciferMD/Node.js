const express = require('express');
const controller = require('../Controllers/likeController')
const router = express.Router();
const passport = require('passport');

router.post('/add', passport.authenticate('jwt',{session:false}), controller.addLike); 
router.delete('/:id',  passport.authenticate('jwt',{session:false}),controller.deleteLike);
router.get('/all',  passport.authenticate('jwt',{session:false}),controller.returnAllLike);

module.exports = router;