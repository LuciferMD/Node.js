const express = require('express');
const controller = require('../Controllers/commentController')
const router = express.Router();
const validate = require("../Middleware/validation_schema");
const commentSchem = require("../Middleware/commentSchem");
const passport =require('passport');

router.post('/add/:id',passport.authenticate('jwt',{session:false}), validate(commentSchem.addComment), controller.addComment);
router.get('/all',passport.authenticate('jwt',{session:false}), controller.returnAllComments);
router.get('/:id',passport.authenticate('jwt',{session:false}), controller.getById);
router.put('/:id', passport.authenticate('jwt', {session:false}), validate(commentSchem.changeComment), controller.changeComment);
router.delete('/:id', passport.authenticate('jwt',{session:false}), controller.deleteComment);

module.exports = router;