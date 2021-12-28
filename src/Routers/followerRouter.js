const express = require('express');
const controller = require('../Controllers/followerController')
const router = express.Router();
const passport = require('passport');

router.post('/add', passport.authenticate('jwt',{session:false}), controller.addFollower);
router.get('/all', passport.authenticate('jwt',{session:false}),controller.returnAllFollowers);
router.delete('/:id', passport.authenticate('jwt',{session:false}),controller.deleteFollower);

module.exports = router;